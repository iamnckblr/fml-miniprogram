//index.js
//获取应用实例
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../models/fml.js');


Page({
  data: {
    stories: [],
    updated: false
  },
  onLoad: function () {
    new AV.Query('FML')
      .descending('createdAt')
      .find()
      .then(fmls => {
        this.setData({ stories: fmls });
        console.log(fmls)
      })
      .catch(console.error);
  },
  upvoteFML: function(e) {
    var selectedIndex = this.data.stories.findIndex(FML => FML.id === e.target.id)
    this.data.stories[selectedIndex].increment("likes", 1).save().then(fml => {
      new AV.Query('FML')
        .descending('createdAt')
        .find()
        .then(fmls => {
          this.setData({ stories: fmls });
          console.log(fmls)
        })
        .catch(console.error);
    });
  }
})
