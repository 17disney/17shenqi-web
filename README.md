# 一起神奇吧 · 17shenqi

## docker

```shell
docker stop 17shenqi-web \
&& docker rm 17shenqi-web \
&& cd /app/17shenqi-web \
&& sudo git pull \
&& docker build -t 17shenqi-web . \
&& docker run -e TZ="Asia/Shanghai" -d -p 16001:3000 --name 17shenqi-web 17shenqi-web
```
