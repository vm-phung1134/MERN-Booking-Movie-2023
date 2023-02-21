
export const isCheckQuanlitySeat = (arr, countTicket) => {
    if (arr.length > countTicket) {
        arr.splice(0, 1);
    }
}

