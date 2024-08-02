import Link from "next/link";

export function NavBar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact-us">Contact-Us</Link>
      <Link href="/zia">Zia</Link>
    </>
  );
}
