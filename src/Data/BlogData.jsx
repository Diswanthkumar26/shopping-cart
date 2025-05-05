import img1 from '../assets/Blogs/amazon-pantry-is-now-amazon-fresh.png';
import img2 from '../assets/Blogs/Boat-Airdopes-Latest-Version.webp';
import img3 from '../assets/Blogs/Amazon-Prime-day-Thumb.png';
import img4 from '../assets/Blogs/howtoearnsupercoinsinflipkartpreview.webp';
import img5 from '../assets/Blogs/preview-of-howtogetfreemobileonamazon.jpg';
import img6 from '../assets/Blogs/voltas-AC-warranty.jpg';
import AmazonFreshImg1 from '../assets/Blogs/blog details/Amazon-pantry-is-now-amazon-fresh (1).png';
import AmazonFreshImg2 from '../assets/Blogs/blog details/amazon-fresh.webp';

export const blogs = [
  {
    id: 'amazon-fresh',
    title: 'Amazon Pantry is Now Amazon Fresh',
    author: 'shaktimaan',
    date: '15 November, 2021',
    image: img1,
    content: (
      <>
         <div className="container shadow mx-auto bg-white px-8 py-6">
            <div className="flex justify-center">
                <div className="w-full max-w-4xl description">
                    <h1 className="text-3xl font-bold mb-4">Amazon Pantry is Now Amazon Fresh</h1>
                    <p className="mb-4">
                        Amazon Pantry is the best way for ordering groceries on Amazon. Amazon Pantry Offers up to 55% discounts on Grocery &amp; House Hold Products.
                    </p>
                    <p className="mb-4"></p>
                    <p className="mb-4 text-lg">
                        <strong>
                            <a
                                title="Amazon Pantry 🛒"
                                href="https://www.dealsmagnet.com/RedirectTo/?url=https%3A%2F%2Fwww.amazon.in%2Fpantry-online-grocery-shopping-store%2Fb%2F%3Fie%3DUTF8%26node%3D9574332031&amp;key=amazon-Pantry-Old-Page"
                                className="bg-cyan-300 text-black px-2 py-1 inline-block rounded"
                            >
                                Amazon Pantry 🛒
                            </a>
                        </strong>
                    </p>
                    <p className="mb-4">
                        Ordering Grocery on Amazon Pantry for Great Saving on Groceries &amp; Household needs? Not able to see Amazon Pantry Option? You are at Right Place to Discover about Amazon Pantry.
                    </p>
                    <p className="mb-4">
                        <img
                            className="mx-auto"
                            src={AmazonFreshImg1}
                            alt="Amazon Pantry is now Amazon Fresh"
                            width="750"
                            height="200"
                        />
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Amazon Pantry is Merged with Amazon Fresh.</h2>
                    <p className="mb-4">
                        Earlier Grocery available on Amazon under 2 store, Amazon Pantry &amp; Amazon Fresh. Now Amazon Pantry Saving Store is Now Merged with Amazon Fresh. Products Available under the Pantry section will be available on Amazon Fresh. With Amazon Fresh, You will Get up to 40% Discount on all your grocery needs &amp; Free Shipping on orders of ₹799/-.
                    </p>
                    <p className="mb-4">
                        <a
                            href="https://www.dealsmagnet.com/RedirectTo/?url=https%3A%2F%2Fwww.amazon.in%2Falm%2Fstorefront%2F%3F_encoding%3DUTF8%26almBrandId%3Dctnow%26ref_%3Dtopnav_storetab_nowstore&amp;key=amazon-fresh"
                            className="bg-cyan-300 text-black px-2 py-1 inline-block rounded text-lg font-semibold"
                        >
                            Shop @ Amazon Fresh 🛒
                        </a>
                    </p>
                    <p className="mb-4">
                        <img
                            className="mx-auto"
                            src={AmazonFreshImg2}
                            alt="Amazon Fresh"
                            width="750"
                            height="450"
                        />
                    </p>
                    <hr className="my-6 border-t" />
                </div>
            </div>
        </div>
      </>
    )
    
  },
  {
    id: 'boat-airdopes',
    title: 'boat Airdopes latest version',
    author: 'shaktimaan',
    date: '20 August, 2021',
    image: img2,
    content: 'Full content for Boat Airdopes blog.'
  },
  {
    id: 'prime-day-2021',
    title: 'Amazon Prime Day 2021 - Everything you need to know',
    author: 'captain',
    date: '25 July, 2021',
    image: img3,
    content: 'Full content for Amazon Prime Day blog.'
  },
  {
    id: 'earn-supercoins',
    title: 'How to Earn Supercoins in Flipkart',
    author: 'iamgroot',
    date: '25 July, 2021',
    image: img4,
    content: 'Full content for Flipkart Supercoins blog.'
  },
  {
    id: 'free-mobile',
    title: 'How to get free mobile on Amazon',
    author: 'iamgroot',
    date: '25 July, 2021',
    image: img5,
    content: 'Full content for Free Mobile on Amazon blog.'
  },
  {
    id: 'voltas-ac',
    title: 'Voltas ACs Warranty & Maintenance',
    author: 'shaktimaan',
    date: '25 July, 2021',
    image: img6,
    content: 'Full content for Voltas AC blog.'
  },
];
