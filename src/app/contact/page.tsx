import Link from 'next/link';

const Contact = () => {
	return (
    <div className="p-6">
		<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			
			<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
				<h2 className="text-2xl font-bold md:text-4xl md:leading-tight">お問い合わせ</h2>
				<p className="mt-1 text-gray-600">contact me</p>
			</div>
		</div>
		
		<div className=" gap-6 px-10">
    <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 ">
      <div className="flex items-center gap-x-4">
        <img className="rounded-full size-20" src="/pos/lGxw2sIP_400x400.jpg" alt="roru_roru"></img>
        <div className="grow">
          <h3 className="font-medium text-gray-800 ">
            Na
          </h3>
          <p className="text-xs uppercase text-gray-500">
            工学部情報工学科３回生
          </p>
        </div>
      </div>

      <p className="mt-3 text-gray-500">
        トロンボーン吹いたり、プログラミングしたりしてます。
      </p>
      <p className="mt-3 text-gray-500">
        お問い合わせはTwitterのDMかメールでお願いします。
      </p>
        <Link href="mailto:kottsz1224@gmailcom?subject=お問い合わせ" className="mt-3 text-gray-500">
          kottsz1224@gmail.com
        </Link>
      
      <div className="mt-3 space-x-1">
        <a className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="https://x.com/_roru_roru">
          <img className="flex-shrink-0 size-3.5" src="/pos/logo-black.png" alt="Twitter"></img>
        </a>
        <a className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="https://github.com/underration">
          <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
      
    </div>
    </div>
	</div>
);
}
export default Contact;