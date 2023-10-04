chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "scrapeKeywords") {
        // Google Ads sayfasından anahtar kelimeleri çekiyorum
        const keywordCells = document.querySelectorAll('ess-cell[essfield="keyword_text"] div[dir="ltr"]');
        const keywords = Array.from(keywordCells).map(cell => cell.textContent.trim());

        // Çekilen anahtar kelimeleri popup.js dosyasına gönderiyorum
        sendResponse({keywords: keywords});
    }
});



import Link from 'next/link'
export default function NotFound() {
    return (
        <div  className=" bg-white w-full px-16 box-border md:px-0 h-[calc(100vh-200px)] flex items-center justify-center max-[600px]:px-0">
            <div
                className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">Page Not
                    Found</p>
                <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could
                    not be found.</p>
                <Link href="/"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
                      title="Return Home">
                    <span>&#8592;</span>
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    )
}