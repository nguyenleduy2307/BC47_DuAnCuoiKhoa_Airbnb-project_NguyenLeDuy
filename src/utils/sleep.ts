export const sleep = (time = 3000) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

// Truyền tham số thì lấy giá trị
// Không truyền tham số thì lấy time = 3000