import Head from "next/head";
import ActiveLink from "./ActiveLink";

function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <div className="flex flex-col min-h-screen">
                <header className="w-full h-16 border-b border-green-500 flex items-center justify-center">
                    <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
                        <ActiveLink href="/">
                            <a className="text-2xl text-green-500">m4tthew5 Blog</a>
                        </ActiveLink>
                        <nav className="text-2xl text-black">
                            <ActiveLink href="/about">
                                <a className="hover:text-green-500">Sobre</a>
                            </ActiveLink>
                        </nav>
                    </div>
                </header>
                <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;