import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DialogCard({ icon, title, description, searchQuery, children, className = "" }) {
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
            {description && <p className="text-gray-600 line-clamp-3">{description}</p>}
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
        {searchQuery && (
          <div className="pt-4 border-t">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <Link
                to={`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm"
              >
                Search on Google <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
