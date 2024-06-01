// Tạo một số hằng số để quản lý các dữ liệu chuỗi
const UBER_CAR = "uberCar"
const UBER_SUV = "uberSUV"
const UBER_BLACK = "uberBlack"

function timKiemGiaTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 8000
    }
    case UBER_SUV: {
      return 9000
    }
    case UBER_BLACK: {
      return 10000
    }
  }
}

function timKiemGiaTienTu1Den19(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7500
    }
    case UBER_SUV: {
      return 8500
    }
    case UBER_BLACK: {
      return 9500
    }
  }
}

function timKiemGiaTienTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7000
    }
    case UBER_SUV: {
      return 8000
    }
    case UBER_BLACK: {
      return 9000
    }
  }
}

function timKiemGiaTienThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 2000
    }
    case UBER_SUV: {
      return 3000
    }
    case UBER_BLACK: {
      return 3500
    }
  }
}

document.getElementById("btnTinhTien").onclick = function () {
  console.log("Tôi là nút tính tiền")
  // Truy xuất và lấy dữ liệu của các input số km, thời gian chờ, và loại xe
  let soKm = document.getElementById("txt-km").value * 1
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1

  console.log(soKm)
  console.log(thoiGianCho)

  //   let loaiXe = document.querySelector("li input:checked")
  let loaiXe = document.querySelector("input[type='radio']:checked").value
  console.log(loaiXe)

  // Xử lý tìm kiếm giá tiền phù hợp
  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe)
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe)
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe)
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe)
  console.log(tienKmDauTien)
  console.log(tienKmTu1Den19)
  console.log(tienKmTu19TroLen)
  console.log(tienThoiGianCho)

  let tongTien = 0
  if (soKm <= 1) {
    // TH1 Người dùng đi trong khoảng 1km
    tongTien = tienKmDauTien * soKm
  } else if (soKm > 1 && soKm <= 19) {
    // TH2 Người dùng đi trong khoảng 1 đến 19
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19
  } else {
    // TH3 Người dùng đi trên 19km
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen
  }
  console.log(tongTien)

  // BTVN (Tính thời gian chờ) 10p ==> (10 - 3) / 3 ==> 3.... => 3 * 2000 ==> 6000
  let lamTronXuong = Math.floor(2.333333)
  // console.log(lamTronXuong);
  let tongTienThoiGianCho = lamTronXuong * tienThoiGianCho
  tongTien += tongTienThoiGianCho

  // Hiển thị tổng tiền
  document.getElementById("divThanhTien").style.display = "block"
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  )
}

//BTVN - Chức năng in hoá đơn
document.getElementById("btnInHoaDon").onclick = function () {
  // Thực hiện xử lí tính toán

  document.getElementById("modal-body").innerHTML = `
    <div
    class="table-responsive"
  >
    <table
      class="table table-primary"
    >
      <thead>
        <tr>
          <th scope="col">Column 1</th>
          <th scope="col">Column 2</th>
          <th scope="col">Column 3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td scope="row">R1C1</td>
          <td>R1C2</td>
          <td>R1C3</td>
        </tr>
        <tr class="">
          <td scope="row">Item</td>
          <td>Item</td>
          <td>Item</td>
        </tr>
      </tbody>
    </table>
  </div>
    `
  // Gọi tới modal và hiển thị
  $("#exampleModal").modal("show")
}
