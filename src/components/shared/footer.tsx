const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t">
            <div className="p-5 flex justify-center">
                {`© ${currentYear} ProStore. All rights reserved.`}
            </div>
        </footer>
    );
};

export default Footer;