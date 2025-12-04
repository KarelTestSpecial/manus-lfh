from playwright.sync_api import Page, expect, sync_playwright
import re

def verify_homepage_updates(page: Page):
    """
    This script verifies two main updates on the homepage:
    1. The "Other Health" button has the correct styling (white background, dark text).
    2. The category cards are fully clickable and navigate correctly.
    """
    # Navigate to the application's homepage
    page.goto("http://localhost:5173/manus-lfh/")

    # 1. Verify the "Other Health" button styling
    other_health_button = page.get_by_test_id("other-health-button")
    expect(other_health_button).to_be_visible()

    # Use regex to check for the presence of essential classes, making the test more robust.
    expect(other_health_button).to_have_class(re.compile(r"\bbg-white\b"))
    expect(other_health_button).to_have_class(re.compile(r"\btext-gray-800\b"))

    other_health_button.scroll_into_view_if_needed()
    page.screenshot(path="01_other_health_button.png")

    # 2. Verify the category cards
    # Find the "Aging" card to test.
    aging_card_link = page.get_by_role("link", name="Aging Understanding the aging process and adding life to years. Learn More")
    expect(aging_card_link).to_be_visible()

    # Scroll to the card and hover over it to trigger hover styles
    aging_card_link.scroll_into_view_if_needed()
    aging_card_link.hover()
    page.wait_for_timeout(500) # Wait for hover effect to be visible
    page.screenshot(path="02_card_hover.png")

    # Click the card and verify navigation
    aging_card_link.click()

    # Assert that the URL is now the "Aging" page, accounting for the hash router
    expect(page).to_have_url("http://localhost:5173/manus-lfh/#/aging")

    # Take a final screenshot to confirm the new page has loaded
    page.screenshot(path="03_navigation_result.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_homepage_updates(page)
            print("Verification script completed successfully.")
        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()
