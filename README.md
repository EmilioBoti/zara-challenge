## Getting Started

First, run the development server:

```bash

# Install dependencies
npm install
 
# execute development mode
npm run dev

# run unit test
npm run test

# build for production
npm run build

# start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🛠️ Development

Project estructure:

```
src/
├── app/
│   ├── globals.css               # styles with CSS global variables
│   ├── page.js                   # Main page
│   └── layout.js                 # Base layout
└── components/
    ├── Header.tsx                # Top bar header
    ├── ColorOptions/             # List of color selection
    ├── CartProductList/          # List of product save to the cart
    ├── Loader/                   # Page loader
    ├── MobileCard/               # Info Product card
    ├── ListProduct/              # List of Product
    ├── ProductCharacteristic/    # Product characteristics selection
    ├── ProductSpecification/     # List product info
    ├── SearchBar/                # Search
    └── StorageOption/            # List of Product storage
└── hooks/
    ├── useNavigation.ts          #Manage page navigation
    ├── useCartProduct.ts         #Manage state/store cart
    ├── useProduct.ts             #Fetch data and state of main page
    └── useProductDetail.ts       #Manage state of product detail page

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
