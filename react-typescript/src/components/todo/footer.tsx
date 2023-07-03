import React from 'react'

class App extends React.Component{
    render(){
        Host gityy
        HostName git.yonyou.com
        User liuyj12
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_rsa

        Host github
        HostName github.com
        User liuyingjie1130
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_rsa_github

        # 以 # 开头的是注释，会被忽略
        # 每项配置都是 参数名 参数值 或者 参数名=参数值，参数名不分大小写，参数值区分
        # Host: 机器别名，用于标识特定的配置
        # HostName: 主机名，一般为 ip 或者 主机域名(实际测试 gitlab.com 或者 gitlab.company.com 都可用)
        # IdentityFile: 私钥证书文件位置，没有pub后缀；默认位置是~/.ssh/id_rsa，如果采用默认证书，可不填此项
        # Port: SSH访问主机的端口号，默认是22端口
        return <div>footer</div>
    }

}

export default App
