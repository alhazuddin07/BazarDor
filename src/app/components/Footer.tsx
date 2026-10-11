

const Footer = () => {
    return (
        <div className="mt-auto bg-white shadow-sm">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 p-4 text-center text-sm sm:p-6 md:flex-row md:justify-between md:items-center md:gap-6 md:text-left md:text-base">
                    <div className="wrap-break-word">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </div>
                    <div className="wrap-break-word text-gray-600">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
