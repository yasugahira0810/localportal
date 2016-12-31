function LinkService() {
}

LinkService.prototype.keywordJudge = function (obj, keyword) {
    var self = this;

    if (angular.isArray(obj)) {
        // 配列の場合
        return obj.some(function (child) {
            return self.keywordJudge(child, keyword);
        });
    } else if (angular.isObject(obj)) {
        // オブジェクトの場合
        var properties = Object.getOwnPropertyNames(obj);
        return properties.some(function (property) {
            var child = obj[property];
            return self.keywordJudge(child, keyword);
        });
    } else if (obj != null) {
        // オブジェクト、配列以外で、値がある場合
        return angular.toJson(obj).search(keyword) != -1;
    }
    // nullまたはundefinedの場合
    return false;
};
