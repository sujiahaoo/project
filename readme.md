#git是什么
集中式版本控制系统(vcs)=>svn
分布式版本控制系统(dvcs)=>git


git的作用
在项目开发的进程中,对值得几率的时间及诶单进行"备份"方便后期恢复(后悔药)
方便团队协作开发

#git文件管理文件的三种状态
你的文件可能处于其中之一：
 
已修改（modified）• 已修改表示(新增,更新,删除)了文件，但还没保存到数据库中。(红色)
已暂存（staged）。• 已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
已提交（committed）• 已提交表示数据已经安全地保存在本地数据库中。
这会让我们的git项目拥有三个阶段:工作区,暂存区以及Git目录

#初次运行Git签的配置
配置用户名和邮箱
```bash
git config --global user.name "sujiahao"
git config --global user.email "1250944910@qq.com"
```
查看配置信息

```bash
git config --list
git config user.name
git config user.email
```
#获取Git仓库(repo)
自行初始化git仓库(git url)
克隆远程仓库(git clone [repo_url])