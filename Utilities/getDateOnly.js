function extractDateFromTimestamp(timestamp) {
    const datePart = timestamp.split('T')[0];
    return datePart;
}


module.exports={
    extractDateFromTimestamp
}