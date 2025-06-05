{/* Footer */}

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-300 px-6 py-8 text-sm">
            <div className="flex justify-between flex-wrap items-start mb-4">
                {/* Social Icons */}
                <div className="flex gap-5 mb-4">
                {[
                    { name: "facebook", link: "https://facebook.com" },
                    { name: "instagram", link: "https://instagram.com" },
                    { name: "youtube", link: "https://youtube.com" },
                    { name: "whatsapp", link: "https://wa.me" },
                ].map((icon, i) => (
                    <a
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                    >
                    <img
                        src={`src/assets/icons/${icon.name}.png`}
                        alt={icon.name}
                        className="w-7 h-7"
                    />
                    </a>
                ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-5 text-base w-48">
                {[
                    { label: "Find Us", icon: "location" },
                    { label: "Our Email", icon: "mail" },
                    { label: "Contact Us", icon: "phone" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-x-4">
                    <img
                        src={`src/assets/icons/${item.icon}.png`}
                        alt={item.icon}
                        className="w-6 h-6"
                    />
                    <span className="font-semibold text-gray-900">
                        {item.label}
                    </span>
                    </div>
                ))}
                </div>
            </div>

            {/* Legal */}
            <div className="text-gray-600 text-sm">
                <p>© 2025 Sun Kaca Indonesia</p>
            </div>
        </footer>
    );
};

export default Footer;