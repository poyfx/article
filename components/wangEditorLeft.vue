<template lang="html">
  <div class="editor">
    <div ref="toolbar" class="toolbar">
		<!-- <text >文章正文</text -->
    </div>
	<textarea type="text" placeholder="请编辑关于您的产品/案例/服务"  @focus="hide" v-show="show"/>
    <div ref="editor" class="text" v-show="!show">
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    name: 'editoritem',
    data() {
      return {
        // uploadPath,
        editor: null,
        info_: null,
		show:true,
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      isClear: {
        type: Boolean,
        default: false
      },
	  shows:{
		  type:Boolean,
		  default:true,
	  }
    },
    watch: {
      isClear(val) {
        // 触发清除文本域内容
        if (val) {
          this.editor.txt.clear()
          this.info_ = null
        }
      },
      value: function(value) {
        if (value !== this.editor.txt.html()) {
          this.editor.txt.html(this.value)
        }
      }
      //value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
    },
    mounted() {
      this.seteditor()
      this.editor.txt.html(this.value)
    },
    methods: {
		hide(){
			this.show = false
		},
      seteditor() {
		   var Token = uni.getStorageSync('Token')
        // http://192.168.2.125:8080/admin/storage/create
        this.editor = new E(this.$refs.toolbar, this.$refs.editor)
        this.editor.customConfig.uploadImgShowBase64 = false // base 64 存储图片
       this.editor.customConfig.uploadImgServer = 'http://api.asset.go-tech.cn/app/user/uploadFile'// 配置服务器端地址
        this.editor.customConfig.uploadImgHeaders = {Token:Token }// 自定义 header
        this.editor.customConfig.uploadFileName = 'file' // 后端接受上传文件的参数名
        this.editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024 // 将图片大小限制为 2M
        this.editor.customConfig.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
        this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间
		// 隐藏“网络图片”tab
		this.editor.customConfig.showLinkImg = false
		// 关闭粘贴内容中的样式
		this.editor.customConfig.pasteFilterStyle = false
		// 忽略粘贴内容中的图片
		this.editor.customConfig.pasteIgnoreImg = true
		var div = document.createElement('div');
		    div.innerHTML = '插入图片';
		    div.style.color = '#888888';
		
		

        // 配置菜单
        this.editor.customConfig.menus = [
          // 'head', // 标题
          // 'bold', // 粗体
          // 'fontSize', // 字号
          // 'fontName', // 字体
          // 'italic', // 斜体
          // 'underline', // 下划线
          // 'strikeThrough', // 删除线
          // 'foreColor', // 文字颜色
          // 'backColor', // 背景颜色
          // 'link', // 插入链接
          // 'list', // 列表
          // 'justify', // 对齐方式
          // 'quote', // 引用
          // 'emoticon', // 表情
          'image', // 插入图片
          // 'table', // 表格
          'video', // 插入视频
          // 'code', // 插入代码
          // 'undo', // 撤销
          // 'redo', // 重复
          // 'fullscreen' // 全屏
        ]

        this.editor.customConfig.uploadImgHooks = {
          fail: (xhr, editor, result) => {
            // 插入图片失败回调
          },
          success: (xhr, editor, result) => {
            // 图片上传成功回调
          },
          timeout: (xhr, editor) => {
            // 网络超时的回调
          },
          error: (xhr, editor) => {
            // 图片上传错误的回调
          },
          customInsert: (insertImg, result, editor) => {
            // 图片上传成功，插入图片的回调
            //result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
            // console.log(result.data[0].url)
            //insertImg()为插入图片的函数
             //循环插入图片
            // for (let i = 0; i < 1; i++) {
              // console.log(result)
              // let url = "http://otp.cdinfotech.top"+result.url
              // insertImg(url)
			   insertImg(result.path)
            // }
          }
        }
        this.editor.customConfig.onchange = (html) => {
          this.info_ = html // 绑定当前逐渐地值
          this.$emit('change', this.info_) // 将内容同步到父组件中
        }
        // 创建富文本编辑器
        this.editor.create()
      }
    }
  }
</script>

<style lang="scss">
  .editor {
    width: 100%;
	background-color: #FFFFFF;
    margin: 0 auto;
    position: relative;
    z-index: 0;
	box-sizing: border-box;
  }
  .toolbar {
    // border: 1px solid #ccc;
	align-content: center;
	align-items: center;
	// justify-content: flex-end;
	background-color: #F7F7F7;
	padding: 16px 0 14px 30px;
  }
  .toolbar text{
	  position: absolute;
	  left: 27px;
	  font-size: 0.75rem;
	  color: #555555;
	  font-weight: 550;
  }
  .text {
	  padding: 20px 26px 20px 28px;
    // border: 1px solid #ccc;
	width: 100%;
    min-height: 200px;
	height: 200px;
  }
  textarea{
	  padding: 20px 26px 20px 28px;
	  min-height: 200px;
	  height: 200px;
	  box-sizing: border-box;
  }
</style>