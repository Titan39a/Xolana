import { Instagram, Linkedin, X } from "lucide-react";

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 py-3 md:p-5 border-t border-[#27272a]">
            <h3 className="text-center text-white spacing tracking-widest">
                {/* You can leave this empty or put custom text here */}
            </h3>
            {/* Remove this div entirely if you don't want social links */}
            {/* Or keep the structure and just remove the anchors */}
        </footer>
    )
}
export default Footer;
