const oldVersion = ` //设置编辑器内容
    function setNewValue() {
        let currentModel = editor.getModel();
        currentModel.setValue(\`//重新设置值\\nconst blog = 'http://fizzz.blog.csdn.net'\`)
    }

    //设置新的语言
    function setNewLanguage1() {
        let currentModel = editor.getModel();
        
        editor.setModel(model);
        model.onDidChangeContent(e => {
            console.log('--->', e)
        })
        if (currentModel) {
            currentModel.dispose();
        }
    }`