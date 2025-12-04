import React from 'react';
import { Route } from 'react-router-dom';

/**
 * Generates an array of React Router <Route> components from a navigation items array.
 * @param {Array} navItems - The array of navigation items, potentially with nested children.
 * @param {Object} componentMap - A map where keys are component names (e.g., 'Home', 'Aging') and values are the actual imported React components.
 * @returns {Array} An array of <Route> components.
 */
const generateRoutes = (navItems, componentMap) => {
  return navItems.map((item) => {
    let componentName;

    if (item.path === '/') {
      componentName = 'Home';
    } else {
      // Extract component name from path, converting kebab-case to PascalCase
      // e.g., '/aging' -> 'Aging'
      // e.g., '/defense-systems/immune-system' -> 'ImmuneSystem'
      const pathParts = item.path.split('/');
      const lastPart = pathParts[pathParts.length - 1];
      componentName = lastPart
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      // Special handling for the main 'DefenseSystems' path that links to its overview
      // if the item itself has children, its component name will be the PascalCase of its path directly.
      // e.g. for /defense-systems, its component is DefenseSystems
      // If it's a child with path `/defense-systems` and label `Overview`, its component is also DefenseSystems
      if (item.path === '/defense-systems' && item.children) {
        componentName = 'DefenseSystems';
      }
    }

    const Component = componentMap[componentName];

    if (!Component) {
      console.warn(
        `Component not found for path: ${item.path} (expected component name: ${componentName})`
      );
      return null;
    }

    if (item.children && item.children.length > 0) {
      // For parent routes with children, the parent path typically renders an overview component
      // and children are nested routes.
      return (
        <Route key={item.path} path={item.path} element={<Component />}>
          {generateRoutes(item.children, componentMap)}
        </Route>
      );
    } else {
      return <Route key={item.path} path={item.path} element={<Component />} />;
    }
  }).filter(Boolean); // Filter out any nulls if components were not found
};

export default generateRoutes;
