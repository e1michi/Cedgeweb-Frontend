export default function Cover({
    pathname
}: Readonly<{
    pathname: string;
}>) {
    function get_title() {
        switch (pathname) {
            case '/':
                return (
                    <div className="">Accelerating Biz Development</div>
                );
            case '/services':
                return (
                    <div className="">SERVICES</div>
                );
            case '/profile':
                return (
                    <div className="">PROFILE</div>
                );
            case '/contact':
                return (
                    <div className="">CONTACT</div>
                );
        }
    }

    function get_sub_title() {
        switch (pathname) {
            case '/':
                return (
                    <div className="mt-2">CYBEREDGE Inc.</div>
                );
            case '/services':
                return (
                    <div className="mt-2 text-2xl">
                        <span>HOME &gt; </span>
                        <span className='text-orange-400'>SERVICES</span>
                    </div>
                );
            case '/profile':
                return (
                    <div className="mt-2 text-2xl">
                        <span>HOME &gt; </span>
                        <span className='text-orange-400'>PROFILE</span>
                    </div>
                );
            case '/contact':
                return (
                    <div className="mt-2 text-2xl">
                        <span>HOME &gt; </span>
                        <span className='text-orange-400'>CONTACT</span>
                    </div>
                );
        }
    }

    return (
        <div className="bg-cover bg-center h-[500px] bg-[url('/yun_10682_shinjuku_Retouch_4k.png')]">
            <div className="container mx-auto px-10">
                <div className="h-[500px] flex items-center  text-white text-5xl font-bold">
                    <div className="flex flex-col mt-[100px]">
                        {get_title()}
                        {get_sub_title()}
                    </div>
                </div>
            </div>
        </div>
    );
}
