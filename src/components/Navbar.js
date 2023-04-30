/* eslint-disable react/jsx-no-target-blank */
const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 px-10 bg-blue-50">

            <p className="text-2xl lg:text-3xl text-blue-600 tracking-wide">Mini Dictionary</p>

            <a href="https://github.com/somenath203/Mini-Dictionary" target="_blank">
                <p className="text-3xl">
                    <i className="fa-brands fa-github"></i>
                </p>
            </a>

        </div>
    )
}
export default Navbar;