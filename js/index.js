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
}
