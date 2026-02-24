import { useState, useEffect, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

// --- Types ---
type Product = {
    id: number;
    title: string;
    category: string;
    image: string;
};

// --- Real Gallery Image Data ---
const boysImages = [
    '/b01.jpeg', '/S001.jpeg', '/s005.jpeg',
    '/s22.jpeg', '/Gallery/SPORTS/S 17.jpg', '/Gallery/BOYS/0005.jpg',
    '/b0000.jpg', '/b82.jpeg', '/b88.jpeg',
    '/b22.webp', '/b333.jpg',
    '/b44.avif', '/Gallery/SPORTS/S 40.jpg', '/Gallery/SPORTS/S 41.jpg',
    '/Gallery/SPORTS/S 42.jpg', '/Gallery/SPORTS/S 43.jpg',
    '/Gallery/SPORTS/S 44.jpg', '/Gallery/SPORTS/S 45.jpg', '/Gallery/SPORTS/S 46.jpg',
    '/Gallery/SPORTS/S 47.jpg', '/Gallery/SPORTS/S 48.jpg',
];

const girlsImages = [
    '/g1.jpeg', '/g2.jpeg', '/g3.jpeg',
    '/g4.jpeg', '/g004.jpg', '/g03.jpg',
    '/g999.webp', '/Gallery/SPORTS/S 7.jpg', '/Gallery/SPORTS/S 8.jpg',
    '/Gallery/SPORTS/S 34.jpg',
];

const sportsImages = [
    '/Gallery/SPORTS/S 17.jpg', '/S001.jpeg', '/s002.jpeg',
    '/s003.jpeg', '/s004.jpeg', '/Gallery/SPORTS/S 6.jpg',
    '/Gallery/SPORTS/S 7.jpg', '/Gallery/SPORTS/S 8.jpg', '/Gallery/SPORTS/S 9.jpg',
    '/Gallery/SPORTS/S 10.jpg', '/Gallery/SPORTS/S 11.jpg', '/s005.jpeg',
    '/Gallery/SPORTS/S 13.jpg', '/Gallery/SPORTS/S 14.jpg', '/Gallery/SPORTS/S 15.jpg',
    '/Gallery/SPORTS/S 16.jpg', '/Gallery/SPORTS/S 17.jpg', '/Gallery/SPORTS/S 18.jpg',
    '/Gallery/SPORTS/S 19.jpg', '/Gallery/SPORTS/S 20.jpg', '/Gallery/SPORTS/S 21.jpg',
    '/Gallery/SPORTS/S 22.jpg', '/Gallery/SPORTS/S 23 .jpg', '/Gallery/SPORTS/S 24.jpg',
    '/Gallery/SPORTS/S 25.jpg', '/Gallery/SPORTS/S 26.jpg', '/Gallery/SPORTS/S 27.jpg',
    '/Gallery/SPORTS/S 28.jpg', '/Gallery/SPORTS/S 29.jpg', '/Gallery/SPORTS/S 30.jpg',
    '/Gallery/SPORTS/S 31.jpg', '/Gallery/SPORTS/S 32.jpg', '/Gallery/SPORTS/S 33.jpg',
    '/Gallery/SPORTS/S 34.jpg', '/Gallery/SPORTS/S 35.jpg', '/Gallery/SPORTS/S 36.jpg',
    '/Gallery/SPORTS/S 37.jpg', '/Gallery/SPORTS/S 38.jpg', '/Gallery/SPORTS/S 39.jpg',
    '/Gallery/SPORTS/S 40.jpg', '/Gallery/SPORTS/S 41.jpg', '/Gallery/SPORTS/S 42.jpg',
    '/Gallery/SPORTS/S 43.jpg', '/Gallery/SPORTS/S 44.jpg', '/Gallery/SPORTS/S 45.jpg',
    '/Gallery/SPORTS/S 46.jpg', '/Gallery/SPORTS/S 47.jpg', '/Gallery/SPORTS/S 48.jpg',
    '/Gallery/SPORTS/S 49.jpg', '/Gallery/SPORTS/S 50.jpg', '/Gallery/SPORTS/S 51.jpg',
    '/Gallery/SPORTS/S 52.webp', '/Gallery/SPORTS/S 53.webp', '/Gallery/SPORTS/S 54.webp',
    '/Gallery/SPORTS/S 55.webp', '/Gallery/SPORTS/S 56.webp', '/Gallery/SPORTS/S 57.webp',
    '/Gallery/SPORTS/S 58.webp', '/Gallery/SPORTS/S 59.webp', '/Gallery/SPORTS/S 60.webp',
    '/Gallery/SPORTS/S 61.webp', '/Gallery/SPORTS/S 62.webp',
];

const allProducts: Product[] = [
    ...boysImages.map((image, i) => ({
        id: i + 1,
        category: 'Boys Collection',
        title: `Boys Collection ${i + 1}`,
        image,
    })),
    ...girlsImages.map((image, i) => ({
        id: boysImages.length + i + 1,
        category: 'Girls Collection',
        title: `Girls Collection ${i + 1}`,
        image,
    })),
    ...sportsImages.map((image, i) => ({
        id: boysImages.length + girlsImages.length + i + 1,
        category: 'Sports Uniform',
        title: `Sports Uniform ${i + 1}`,
        image,
    })),
];

// --- Lightbox Component ---
const Lightbox = ({
    product,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
}: {
    product: Product;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
    hasPrev: boolean;
    hasNext: boolean;
}) => {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
            if (e.key === 'ArrowRight' && hasNext) onNext();
        };
        window.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext, hasPrev, hasNext]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
                <X size={22} />
            </button>

            {/* Prev Button */}
            {hasPrev && (
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-2 sm:left-4 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            {/* Next Button */}
            {hasNext && (
                <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-2 sm:right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            {/* Image */}
            <div
                className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg p-3 sm:p-4">
                    <p className="text-white text-sm sm:text-base font-semibold">{product.title}</p>
                    <p className="text-white/70 text-xs sm:text-sm">{product.category}</p>
                </div>
            </div>
        </div>
    );
};

// --- Product Card ---
const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <div
            className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 w-full"
            onClick={onClick}
            style={{ aspectRatio: '4 / 5' }}
        >
            {/* Loading skeleton */}
            {!imgLoaded && !imgError && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-xl" />
            )}

            {/* Error fallback */}
            {imgError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl">
                    <div className="text-center p-4">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-200 flex items-center justify-center">
                            <ZoomIn size={20} className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-400 font-medium">Image unavailable</p>
                    </div>
                </div>
            )}

            <img
                src={product.image}
                alt={product.title}
                className={`w-full h-full object-cover rounded-lg sm:rounded-xl transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
            />

            {/* Hover Overlay with zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl flex items-end p-2 sm:p-3">
                <div className="flex items-center justify-between w-full">
                    <p className="text-white text-xs sm:text-sm font-semibold truncate mr-2">{product.title}</p>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <ZoomIn size={14} className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const GalleryPage = () => {
    const [activeCategory, setActiveCategory] = useState('Boys Collection');
    const [currentPage, setCurrentPage] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const itemsPerPage = 12;

    const filteredProducts = allProducts.filter(p => p.category === activeCategory);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const categories = ['Boys Collection', 'Girls Collection', 'Sports Uniform'];

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    // Lightbox handlers
    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
    }, []);

    const goToPrevImage = useCallback(() => {
        setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev));
    }, []);

    const goToNextImage = useCallback(() => {
        setLightboxIndex(prev => (prev !== null && prev < currentItems.length - 1 ? prev + 1 : prev));
    }, [currentItems.length]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navigation />

            {/* Banner Section */}
            <div className="pt-20 pb-6 md:pt-24 md:pb-12 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mb-2 md:mb-4 tracking-tighter uppercase">
                        Our Gallery
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto font-medium mb-5 md:mb-8">
                        Explore our collection of stunning gallery images
                    </p>

                    {/* Category Tabs — centered on all devices */}
                    <div className="flex justify-center flex-wrap gap-2 md:gap-3 pb-1 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-grow py-4 sm:py-6 md:py-12 w-full sm:container mx-auto px-2 sm:px-6 lg:px-8">
                {/* Active Category Title */}
                <div className="flex items-center gap-2 sm:gap-3 mb-6 md:mb-10">
                    <h2 className="text-base sm:text-lg md:text-3xl font-black text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                        {activeCategory}
                    </h2>
                    <div className="h-[2px] bg-gray-200 flex-1 min-w-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider bg-white px-2 sm:px-3 py-1 rounded-full border border-gray-100 whitespace-nowrap">
                        {filteredProducts.length} Images
                    </span>
                </div>

                {/* Image Grid — 1 col full-width on mobile, scales up on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-10 md:mb-16">
                    {currentItems.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex flex-col items-center space-y-3">
                        {/* Mobile: simple prev/next with page info */}
                        <div className="flex items-center gap-2 w-full max-w-xs sm:hidden">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`flex-1 flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                                    }`}
                            >
                                <ChevronLeft size={16} /> Prev
                            </button>
                            <span className="text-sm font-bold text-gray-700 whitespace-nowrap min-w-[50px] text-center">
                                {currentPage} / {totalPages}
                            </span>
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`flex-1 flex items-center justify-center gap-1 px-3 py-2.5 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === totalPages
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                                    }`}
                            >
                                Next <ChevronRight size={16} />
                            </button>
                        </div>

                        {/* Desktop: full pagination */}
                        <div className="hidden sm:flex items-center space-x-2">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                <ChevronLeft size={18} />
                                Previous
                            </button>

                            <div className="flex items-center space-x-1">
                                {Array.from({ length: totalPages }, (_, i) => {
                                    const pageNum = i + 1;
                                    return (
                                        <button
                                            key={pageNum}
                                            onClick={() => paginate(pageNum)}
                                            className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === pageNum
                                                ? 'bg-gray-900 text-white shadow-lg'
                                                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === totalPages
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                Next
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 font-medium text-center">
                            Page {currentPage} of {totalPages} &mdash; {filteredProducts.length} images in {activeCategory}
                        </p>
                    </div>
                )}
            </main>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && currentItems[lightboxIndex] && (
                <Lightbox
                    product={currentItems[lightboxIndex]}
                    onClose={closeLightbox}
                    onPrev={goToPrevImage}
                    onNext={goToNextImage}
                    hasPrev={lightboxIndex > 0}
                    hasNext={lightboxIndex < currentItems.length - 1}
                />
            )}

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;

