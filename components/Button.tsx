import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href: string;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300";

    const styles =
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-neutral-300 text-neutral-700 hover:bg-neutral-100";

    return (
        <Link href={href} className={`${base} ${styles} ${className}`}>
            {children}
        </Link>
    );
}