export default function ButtonOutline({ children, props, ...rootDOMAttributes }) {
    return (
        <button className="bg-transparent border border-blue-600 text-xl rounded text-blue-600 mt-4 px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white" {...rootDOMAttributes}>{children}</button>
    )
}