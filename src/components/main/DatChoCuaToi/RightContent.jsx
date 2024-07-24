import listIcon from '../../../assets/user-booking-ic.svg'

function RightContent() {
    return ( 
        <div className="w-[70%] mt-10">
            <div className="w-full shadow bg-[#EDEDED] rounded-lg">
                <div className="inline-flex items-center p-4">
                    <div className="mr-4">
                    <img src={listIcon} alt="Avatar"
                                    className='w-[32px] h-[32px] rounded-full' />
                    </div>
                    <div className="font-semibold text-lg"> 
                        Xem tất cả vé máy bay và phiếu thanh toán trong <a path="#" className='text-[#1D4886]'>Đặt chỗ của tôi</a>
                    </div>
                </div>
            </div>
            <h1 className="text-black my-5">Danh sach dat cho</h1>
            <div className="">
                
            </div>

        </div>
     );
}

export default RightContent;