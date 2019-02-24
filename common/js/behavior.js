function behavior() {
    this.getMainNavItems();
    console.log("this.getMainNavItems: ", this.getMainNavItems);
}

behavior.prototype.getMainNavItems = function() {
    _this = this;
    leftFrame1 = document.getElementsByName("leftFrame1");

    this.getMainNavItems = _this.iframeRef(leftFrame1[0]);
    // this.getMainNavItems = this.getMainNavItems.getElementsByTagName("tr");
    // _this.getMainNavItems = document.get;
};

behavior.prototype.iframeRef = function(frameRef) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument;
};

testBehavior = new behavior();
