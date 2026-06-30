import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    badgeType: {
      control: 'select',
      options: ['default', 'sale', 'new', 'sold-out'],
    },
    price: {
      control: 'number',
    },
    originalPrice: {
      control: 'number',
    },
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    imageSrc: '/keyboard.png',
    imageAlt: 'VibeType Wireless Mechanical Keyboard',
    title: 'VibeType Wireless Mechanical Keyboard',
    category: 'Peripherals',
    description: 'Minimalist mechanical keyboard with custom linear switches, PBT keycaps, and customizable pastel warm backlights.',
    price: 129.99,
    rating: 4.8,
    reviewCount: 38,
  },
};

export const OnSale: Story = {
  args: {
    imageSrc: '/headphones.png',
    imageAlt: 'Acoustix Active Noise-Canceling Headphones',
    title: 'Acoustix Studio ANC Headphones',
    category: 'Audio',
    description: 'Experience deep immersive sound with advanced hybrid ANC, hi-res sound codecs, and a plush memory-foam fit.',
    price: 199.99,
    originalPrice: 249.99,
    badgeText: 'Save $50',
    badgeType: 'sale',
    rating: 4.9,
    reviewCount: 114,
  },
};

export const NewRelease: Story = {
  args: {
    imageSrc: '/keyboard.png',
    imageAlt: 'VibeType Wireless Mechanical Keyboard',
    title: 'VibeType Pro Special Edition',
    category: 'Peripherals',
    description: 'Limited edition customizable setup with double-shot keycaps and lubed stabilizer rails.',
    price: 159.99,
    badgeText: 'New Release',
    badgeType: 'new',
    rating: 5.0,
    reviewCount: 3,
  },
};

export const SoldOut: Story = {
  args: {
    imageSrc: '/headphones.png',
    imageAlt: 'Acoustix Active Noise-Canceling Headphones',
    title: 'Acoustix Studio ANC Headphones',
    category: 'Audio',
    description: 'Limited run copper and matte black edition. High fidelity performance.',
    price: 249.99,
    badgeText: 'Out of Stock',
    badgeType: 'sold-out',
    rating: 4.7,
    reviewCount: 52,
  },
};
