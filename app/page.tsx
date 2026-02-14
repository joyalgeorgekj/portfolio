function page() {
    return (
        <div className="bg overflow-hidden">
            <div className="container absolute w-1/4 aspect-square top-0 left-0 -z-10 rounded-br-full blur-xs"></div>
            <div className="container absolute w-2/4 aspect-square bottom-0 right-0 -z-10 rounded-tl-full blur-xs [clip-path:polygon(0_0,0_100%,100%_0,100%_100%,0_100%)]"></div>
        </div>
    );
}

export default page;
