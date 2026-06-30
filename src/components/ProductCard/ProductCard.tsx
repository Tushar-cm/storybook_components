import React from 'react';
import { Button } from '../Button';

export interface ProductCardProps {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  category?: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  badgeText?: string;
  badgeType?: 'default' | 'sale' | 'new' | 'sold-out';
  onAddToCart?: () => void;
  isLoading?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt = 'Product image',
  title,
  category,
  description,
  price,
  originalPrice,
  rating = 5.0,
  reviewCount = 0,
  badgeText,
  badgeType = 'default',
  onAddToCart,
  isLoading = false,
}) => {
  const badgeColors = {
    default: 'bg-secondary text-secondary-foreground',
    sale: 'bg-red-500 text-white dark:bg-red-600',
    new: 'bg-primary text-primary-foreground',
    'sold-out': 'bg-gray-500 text-white dark:bg-gray-600',
  };

  const isSoldOut = badgeType === 'sold-out';

  // Format currency
  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  return (
    <div className="group relative flex flex-col w-full rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Badge container */}
      {badgeText && (
        <div className="absolute top-3 left-3 z-10">
          <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${badgeColors[badgeType]}`}>
            {badgeText}
          </span>
        </div>
      )}

      {/* Image Gallery / Showcase */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted select-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {isSoldOut && (
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="text-sm font-bold uppercase tracking-wider text-red-500 bg-card px-4 py-2 rounded-lg border border-border shadow-sm">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content body */}
      <div className="flex flex-col flex-1 p-5 gap-3.5">
        <div className="flex flex-col gap-1">
          {category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              {category}
            </span>
          )}
          <h3 className="font-semibold text-base line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Rating Block */}
        {reviewCount >= 0 && (
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => {
                const filled = i < Math.floor(rating);
                return (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${filled ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={filled ? 0 : 2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499c.15-.427.77-.427.92 0l1.598 4.549a1 1 0 00.95.69h4.907c.461 0 .652.593.277.869l-3.97 2.913a1 1 0 00-.363 1.118l1.598 4.55c.15.426-.343.784-.717.558l-3.97-2.913a1 1 0 00-1.18 0l-3.97 2.913c-.374.226-.867-.132-.717-.558l1.598-4.55a1 1 0 00-.363-1.118l-3.97-2.913c-.375-.276-.184-.869.277-.869h4.907a1 1 0 00.95-.69L11.48 3.5z"
                    />
                  </svg>
                );
              })}
            </div>
            <span className="text-xs font-semibold text-foreground/80">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
        )}

        {description && (
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex-1" /> {/* Spacer */}

        {/* Pricing and Action Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/60 gap-4 mt-auto">
          <div className="flex flex-col">
            {originalPrice && originalPrice > price && (
              <span className="text-xs text-muted-foreground line-through decoration-red-400">
                {formatPrice(originalPrice)}
              </span>
            )}
            <span className="text-base font-bold tracking-tight">
              {formatPrice(price)}
            </span>
          </div>

          <Button
            size="sm"
            variant={isSoldOut ? 'outline' : 'primary'}
            disabled={isSoldOut}
            isLoading={isLoading}
            onClick={onAddToCart}
            className="shrink-0"
          >
            {isSoldOut ? 'Restocking' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
