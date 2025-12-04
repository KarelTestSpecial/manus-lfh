import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function InfoCard({
    icon,
    title,
    description,
    details,
    searchQuery,
    link,
    className = "",
    children
}) {
    // If there are details, render a Dialog
    if (details) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Card className={`hover:shadow-lg transition-all cursor-pointer hover:scale-105 border-transparent hover:border-green-200 h-full ${className}`}>
                        <CardHeader>
                            <CardTitle className="flex items-center text-lg">
                                {icon}
                                <span className="ml-2">{title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {description && <p className="text-gray-600 mb-2">{description}</p>}
                            {children}
                            <p className="text-sm text-green-600 mt-2 flex items-center">
                                Click to learn more <ArrowRight className="ml-1 h-3 w-3" />
                            </p>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-2xl">
                            {icon}
                            {title}
                        </DialogTitle>
                        {description && <DialogDescription className="text-lg">{description}</DialogDescription>}
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        {/* If details is a string, render it as a paragraph */}
                        {typeof details === 'string' ? (
                            <p className="text-gray-700 leading-relaxed">{details}</p>
                        ) : (
                            /* If details is a component or object, render it directly */
                            details
                        )}

                        {/* Optional: Add a Google Search link at the bottom of the modal */}
                        {searchQuery && (
                            <div className="pt-4 border-t">
                                <Link
                                    to={`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline flex items-center text-sm"
                                >
                                    Search for more info on Google <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        )
    }

    // If there is a link (internal or external), render a Link wrapper
    if (link || searchQuery) {
        const destination = link || `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
        const isExternal = !!searchQuery || link?.startsWith('http')

        return (
            <Link
                to={destination}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block h-full"
            >
                <Card className={`hover:shadow-lg transition-all hover:scale-105 border-transparent hover:border-blue-200 h-full ${className}`}>
                    <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                            {icon}
                            <span className="ml-2">{title}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {description && <p className="text-gray-600">{description}</p>}
                        {children}
                    </CardContent>
                </Card>
            </Link>
        )
    }

    // Fallback: just a card
    return (
        <Card className={`h-full ${className}`}>
            <CardHeader>
                <CardTitle className="flex items-center text-lg">
                    {icon}
                    <span className="ml-2">{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {description && <p className="text-gray-600">{description}</p>}
                {children}
            </CardContent>
        </Card>
    )
}
