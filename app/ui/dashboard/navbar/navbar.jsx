import image from '../../../../images/Avatar.png';
import logo from '../../../../images/theiapollo-logo.jpg' 
import Image from 'next/image';
function Navbar() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start rtl:justify-end ">
                  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                  <a className="flex ms-2 md:me-24">
                     <Image src={logo} className="me-8" width="45" height="45" alt="Theiapollo Logo"></Image> 
                     <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Theiapollo</span>
                  </a>
                 </div>
                 {/* <form>   
                     <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                     <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                     </div>
                  </form> */}
                  <div className="flex items-center">
                     <div className="flex items-center ms-3">
                        <div>
                           <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                              <span className="sr-only">Open user menu</span>
                              <Image className="rounded-full" width="35" height="" src={image} alt="user photo"></Image>
                           </button>
                        </div>
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                           <div className="px-4 py-3" role="none">
                              <p className="text-sm text-gray-900 dark:text-white" role="none">
                                 Unknown User
                              </p>
                           </div>
                           <ul className="py-1" role="none">
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                              </li>
                              <li>
                                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </nav>
    </>
  )
}
export default  Navbar;