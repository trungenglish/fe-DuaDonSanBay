const DetailInfoCard = [
    {
        title: "Cách gặp tài xế",
        Buoc1: "Sau khi xác nhận thanh toán, phiếu thanh toán Traveloka sẽ được gửi qua email. Bạn có thể xem phiếu trong phần Đặt chỗ của tôi.",
        Buoc2: "Khi đến Sân bay, tài xế của bạn sẽ đợi ở sảnh đến với bảng tên.",
        Buoc3: "Số điện thoại của công ty đưa đón có sẵn trong voucher của bạn hoặc trên. Trong ứng dụng tự phục vụ, bạn cũng sẽ thấy thông tin chi tiết về tài xế của mình ngay trước khi bắt đầu chuyến đi.",
        Buoc4: "Trình phiếu thanh toán Traveloka cho tài xế để xác nhận đặt chỗ.",
    }
]
function ExpandDetailCard() {
    return (
        <div className="flex mx-auto bg-white p-6 shadow-md rounded-lg">
            <div className="w-[60%]"></div>
            {DetailInfoCard.map((DetailInfo, index) => (
                <div key={index} className="">
                <h2 className="text-2xl font-bold mb-4">Cách gặp tài xế</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li>{DetailInfo.Buoc1}</li>
                    <li>{DetailInfo.Buoc2}</li>
                    <li>{DetailInfo.Buoc3}</li>
                    <li>{DetailInfo.Buoc4}</li>
                </ul>
            </div>
            ))}
            
        </div>
    );
}

export default ExpandDetailCard;