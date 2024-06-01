# CYBERSOFT ACADEMY

_(Lớp BootCamp Sáng 12 - Năm 2024 - Khoá Front-End)_

<div align="center">
	<picture>
		<img loading="lazy" width="100%" src="./images/banner-cybersoft-course.png" alt="Banner">
	</picture>
</div>

## [Buổi 11 - 21] BÀI TẬP JAVASCRIPT - UBER

# Mục tiêu

1. Thực hành về các kiến thức JavaScript.

2. Dựa trên layout được cung cấp => Xây dựng các chức năng theo yêu cầu.

# ĐỀ BÀI - Dự án Tính tiền Uber

- Cho người dùng chọn 1 trong 3 loại Uber:

  - 1 : UberCar
  - 2 : Uber SUV
  - 3 : UberBlack

- Cho người dùng nhập vào số KM đi được và Thời gian chờ. Biểu phí như bên dưới:

| THEO KM                                | UBER CAR (Đ) | UBER SUV (Đ) | UBER BLACK (Đ) |
| -------------------------------------- | ------------ | ------------ | -------------- |
| KM ĐẦU TIÊN                            | 8000         | 9000         | 10000          |
| Từ 1 đến 19                            | 7500         | 8500         | 9500           |
| Từ 19 trở lên                          | 7000         | 8000         | 9000           |
| Thời gian chờ trên 3 phút (mỗi 3 phút) | 2000         | 3000         | 3500           |

### Yêu cầu:

1. Tính tổng tiền đi được
2. In hóa đơn chi tiết như biểu mẫu

#### CHI TIẾT HÓA ĐƠN

| CHI TIẾT       | SỬ DỤNG | ĐƠN GIÁ (1000đ)      | THÀNH TIỀN (1000đ) |
| -------------- | ------- | -------------------- | ------------------ |
| KM ĐẦU TIÊN    | 0.8     | (tùy theo loại uber) |                    |
| Từ ... đến ... | ...     | ...                  | ...                |
| Từ ... đến ... | ...     | ...                  | ...                |
| Thời gian chờ  | ...     | ...                  | ...                |
| TỔNG TIỀN:     |         |                      | ...                |

#### Quy tắc tính tiền taxi

##### 1. Khi số km <= 1

- Tiền trả = giá km đầu tiên \* số km

##### 2. Khi số km > 1 và <= 19

- Tiền trả = giá km đầu tiên + (số km - 1) \* Giá km từ 1_19

##### 3. Khi số km > 19

- Tiền trả = giá km đầu tiên + 18 _ Giá km từ 1_19 + (số km - 19) _ giá trên 19

##### 4. Thời gian chờ >= 3 phút

- Tiền chờ = số lần chờ \* giá chờ

<hr>

> Bài làm của Trương Thục Vân.
