function removeInvalidClass(inputElement, errorSpanId) {
    inputElement.classList.remove('invalid-input');
    document.getElementById(errorSpanId).remove();
}