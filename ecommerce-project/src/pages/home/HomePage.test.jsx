import { it, expect, describe, vi, beforeEach } from 'vitest';
import { HomePage } from './HomePage.jsx';
import { render, screen, within } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router';

vi.mock('axios');

describe('HomePage component', () => {
    let loadCart = vi.fn();

    beforeEach(() => {
        loadCart = vi.fn();

        axios.get.mockImplementation(async (urlPath) => {
            if (urlPath === '/api/products') {
                return {
                    data: [{
                        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        image: "images/products/intermediate-composite-basketball.jpg",
                        name: "Intermediate Size Basketball",
                        rating: {
                            stars: 4,
                            count: 127
                        },
                        priceCents: 2095,
                        keywords: ["sports", "basketballs"]
                    },
                    {
                        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
                        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
                        name: "Adults Plain Cotton T-Shirt - 2 Pack",
                        rating: {
                            stars: 4.5,
                            count: 56
                        },
                        priceCents: 799,
                        keywords: ["tshirts", "apparel", "mens"]
                    }]
                }
            }
        })
    })

    it('Displays products correctly', async () => {
        render(<MemoryRouter><HomePage cart={[]} loadCart={loadCart} /></MemoryRouter>);

        const productContainers = await screen.findAllByTestId('product-container')

        expect(productContainers.length).toBe(2);

        expect(within(productContainers[0]).getByText("Intermediate Size Basketball")).toBeInTheDocument();
        expect(within(productContainers[1]).getByText("Adults Plain Cotton T-Shirt - 2 Pack")).toBeInTheDocument();
    })
})

