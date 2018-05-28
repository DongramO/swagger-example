# Swagger를 알아보자!

#### 시작하기 전에

해당 블로그에 작성되는 글은 주인장의 지극히 주관적인 생각이 다수이며, 대부분의 지식은 구글링을 통해 얻고 있기 때문에 옳지않은 정보가 있습니다. 

잘못된 부분이나 수정해야 하는 부분이 있다면 과감히 덧글을 남겨주세요! 모르는게 많은 새싹입니다![img](http://i1.daumcdn.net/deco/contents/emoticon/things_16.gif?v=2)

#### 오늘의 주제

정말 오랜만에 포스팅을 하게된거 같은데 하는일은 없지만 바쁘긴 무쟈게 바쁘다보니 시간이 없었어요. ㅜㅡㅜ

회사 세미나에서 발표를 하게 되어 오랜만에 포스팅을 하게 되었습니다. 오늘은 주제는 "RESTful API 문서화" 하는 방법! 그 이름도 유명한 "Swagger"의 소개와 간단한 사용방법 입니다. 정말 간단하게만 준비하였습니다. 자세하게 적으면 엄청 많아질것 같아서요. 이름에서 마저도 스웩(Swag)이 느껴지네요.

그만 떠들고 얼른 시작하겠습니다.

#### Swagger?

스웨거(Swagger)는 Open Api Specification(OAS)를 위한 프레임워크 입니다.

API들이 가지고 있는 스펙(spec)을 명세, 관리할 수 있는 프로젝트 입니다. 협업을 진행하거나 이미 만들어져 있는 프로젝트에 대해 유지보수를 진행하게 된다면 구축되어 있는 API서버가 어떤 스펙을 가지고 있는지 파악해야 합니다. 이러한 스펙을 정리하기 위해 API 문서화 작업을 하게 되며, 위의 과정을 직접 손으로 하게되는 경우 작업에 착수하기 전에 API의 명세와 문서를 작성하고,  API가 수정될 때 마다 문서도 같이 수정해줘야 하는 지옥같은 귀찮음(what the Fxxk!!!!!!!)이 동반하게 됩니다. 이러한 불편함을 조금이나마 줄여주기 위해 개발된 것이 이름하여 "Swagger Project" 입니다.

Swgger의 공식 사이트는 [여기](http://www.swagger.io/) 입니다.

해당 사이트에서 Swagger에 관한 여러가지 정보를 획득하실 수 있습니다.

Swagger의 5가지 기능
![img](http://cfile9.uf.tistory.com/image/9934644D5B0A749D24E949)(Swagger.io의 메인화면)

1. API 디자인Swagger-editor를 통해 api를 문서화하고 빠르게 명세할 수 있습니다. 
2. API DevelopmentSwagger-codegen을 통해 작성된 문서를 통해 SDK를 생성하여 빌드 프로세스를 간소화 할 수 있도록 도와줍니다. 문서를 통해 실행하면 프로토 타입 코드를 생성해주는데 파일 구조가 정해져있는것 같습니다. 
3. API Documentation

Swagger-UI를 통해 작성된 API를 시각화시켜 줍니다.

4. API Testing

Swagger-Inspector를 통해 API를 시각화 하고 빠른 테스팅을 진행할 수 있습니다.

5. Standardize

Swagger-hub를 통해 개인, 팀원들이 API정보를 공유하는 Hub입니다.

API를 디자인 해보자

![img](http://cfile30.uf.tistory.com/image/99C2B03A5B0A7D3323F6E9)
우선, Swagger.io에 있는 Docs 탭을 통해 문서를 작성하는 기초적인 문법을 확인 할 수 있습니다.

![img](http://cfile29.uf.tistory.com/image/99677F3E5B0A80380C89A0)

저는 Swagger V2.0을 사용할 것이기 때문에 도큐먼트 옵션을 V2.0으로 변경해 주시고 이동합니다.

(기본은 OpenAPI V3.0입니다.)

![img](http://cfile4.uf.tistory.com/image/9984D8395B0A817502A46C)

페이지를 이동하면 이렇게 다양한 옵션에 대한 설명(좌측), 기능에 대한 예제 코드(우측)이 나타납니다.

#### Swagger-Editor 이용해 보기

스웨거에디터는 공식사이트의 Live Demo를 이용하는 방법과 에디터 소스를 다운 받아서 사용하는 방법이 있습니다. 저는 docker를 이용하여 Swagger-Editor를 설치한 후 이용하였습니다. 자! 그럼 이제 설치를 해 봅시다.

**swagger-editor 설치 명령어**

docker pull swaggerapi/swagger-editor

docker run -d -p 80:8080 swaggerapi/swagger-editor

도커가 설치되어 있다는 가정하에

Docker Hub에 명시되어 있는 두가지 명령어를 실행하면!

![img](http://cfile2.uf.tistory.com/image/99262F415B0A83670638F2)

로컬 80포트를 통해 Swagger-editor가 실행되고 있음을 확인할 수 있습니다.

브라우저를 통해 localhost:80포트로 접근을 하면 예쁜 Swagger-editor화면을 확인할 수 있습니다.

저는  yaml형식으로 문서를 작성하고 있으며,  JSON형식으로도 작성이 가능하다고 합니다. 

이제 API 디자인을 시작해 봅시다!

아래 내용은 Swagger를 이용하기 위한 기본 옵션을 설정해주는 부분입니다.

```
# 몇 버전의 신텍스를 사용할지 설정해 줍니다.
swagger: "2.0"
info:
  version: "0.0.1"
  title: tistory test

# swagger가 실행되고 있는  host를 설정해 줍니다.
host: localhost:4000

# url에서 사용할 basePath를 설정해 줍니다.
basePath: /api/v1.0

schemes:
  # 프로토콜을 설정해 주는 곳인데, Production으로 사용시 http를 제거하는 것을 권장합니다.
  - http
  - https

# 서버로 보낼 데이터의 Content-type을 설정해 줍니다.
consumes:
  - application/json

# 클라이언트에게 전송할 데이터의 타입을 설정해 줍니다.
produces:
  - application/json
```

이제 간단한 API를 작성해 보도록 하겠습니다. 

```
paths:
  /user/{user_name}:
    post:
      tags:
      - "tag-for-user"
      summary: "api-summary"
      description: "swagger-example"
      consumes:
      - "application/x-www-form-urlencoded"

# parameters에 대한 내용을 명세한 부분 입니다. 
# 이 부분에서 작성하는 순서는 큰 의미가 없는것 같습니다.
# in: path, header, body, query 저는 보통 네가지 형태를 주로 사용합니다.
# name : 변수명이라고 생각하시면 됩니다. 위의 네가지 방식을 통해서 넘어오는 변수의 이름입니다.
# type : 데이터 타입을 명시해 줍니다. string, boolean, integer, number, array ... 등 여러가지 데이터 타입이 있습니다.
# scheme $ref: 밑의 부분의 model 작성을 통해 참조하여 사용 가능합니다.

      parameters:
      - name: "user_name"
        in: "path"
        description: "spec for user_name"
        required: true
        type: "string"

      - name: "queryString-exam"
        in: "query"
        description: "offset for pagination"
        required: false
        type: "integer"

      - name: "header-exam"
        in: "header"
        required: true
        type: "string"

     - in: "body"
        name: "user"
        required: false
        schema:
          $ref: "#/definitions/user"

# 요청이 들어왔을때 응답에 대한 명세를 표현합니다.
# 각 응답 코드별 응답 메시지와 포멧을 설정해 줄 수 잇습니다.
      responses:
        200:
          description: "status code 200"
          schema:
            $ref: "#/definitions/user"
        401:
          description: "Authentication Error"
          schema:
            $ref: "#/definitions/SuccessResponse"
        500:
          description: "status code 500"
          schema:
            $ref: "#/definitions/ErrorResponse" 


# Response와 Request에 사용할 Modle을 정의해주는 부분 입니다.
# Example 데이터도 삽입이 가능하며 Swagger-Inspecter를 통한 테스트 데이터로 사용됩니다.
definitions:
  user:
    type: "object"
    required:
    - "username"
    properties:
      id:
        type: "integer"
        description: "The user ID."
      username:
        type: "string"
        description: "The user name."
    example:
      id: 0
      username: "username"

SuccessResponse:
      properties:
        code:
          type: integer
        status:
          type: string
        message:
          type: string

 ErrorResponse:
    properties:
      code:
        type: integer
      status:
        type: string
      message:
        type: string
```



#### Swagger-codegen

Swagger.io에서 설명하는 Swagger Codegen에 대한 내용입니다.

![img](http://cfile8.uf.tistory.com/image/99CDA6465B0AB27A1B3563)

Swagger를 통해 API Server-stub을 제작할 수 있고 Client SDK를 생성하여 생산속도를 늘릴 수 있다는 내용입니다.

Swagger Codegen에서는 다양한 언어를 지원합니다.( *모든언어를 지원하진 않습니다) Swagger-Codegen에서 제공하는 언어는 다음과 같습니다. 저는 node.js를 이용하여 개발을 하기 때문에 Swagger를 택하여 이용하고 있습니다.

![img](http://cfile25.uf.tistory.com/image/99FEEE4E5B0A9DB421BF3A)

이제 뭐하는 친구인지, 나에게 알맞은 프로그램인지 알아보았으니 직접 설치를 하고 이용을 해보도록 하겠습니다.

지난시간에 작성한  API 디자인을 Swagger-Editor를 통해 다시 열어 줍니다.

Swagger-editor상단을 확인해보면 여러가지 메뉴를 확인할 수 있습니다.

File-> Save as YAML -> .yaml 파일 생성하기를 진행합니다.

사실 Generate Server 메뉴를 통해 아주 간단하게 Swagger-codegen을 이용할 수 있지만 해당 기능(codegenerator)만 이용하시는 분들도 있을꺼라 생각하여 프로그램을 설치하고 실행하는 방법을 통해 진행해 보도록 하겠습니다.

Swagger-codegen Github 주소 입니다 : [여기욧!](https://github.com/swagger-api/swagger-codegen)

리드미를 읽어보시면 다양한 설치 방법이 나와있습니다.

저는 맥사용자 이기 때문에 Homebrew를 통해 간단하게 설치하였습니다.

각자 이용 환경에 맞는 설정을 진행해 주세요.

어려움이 있으신 분들은 그냥 Swagger-editor에 있는 codegen을 통해 진행하셔도 무방합니다.

swagger-codegen generate -i {파일 이름} -l {언어}

 

깔끔하게 보기 위해 해당경로에서 명령어를 실행해 보도록 하겠습니다.

![img](http://cfile3.uf.tistory.com/image/995E84375B0AA6A5175806)

이렇게 swagger-codegen 명령어를 통해 server stub을 생성할 수 있습니다.

기본적으로 MVC 패턴에 맞춰서 프로토타입이 생성되는 것을 확인할 수 있습니다.

![img](http://cfile26.uf.tistory.com/image/99733E375B0AABA739B0F4)

npm install을 통해 Dependency를 모두 맞춰주고 파일을 실행해 봅시다.

기본적으로 Swagger-codegen을 실행하는 과정을 통해 Swagger-UI도 같이 설치되는것을 확인하였습니다.

기존의 프로젝트에 Swgger-Editor 혹은 Swagger-UI를 설치하는 경우 npm에 있는 패키지를 사용하여 설치할 수 있습니다.

![img](http://cfile9.uf.tistory.com/image/99A7184E5B0AAC9B1B2770)

명시되어 있는것 처럼 해당주소(localhost:3000/docs)로 접근을 하게되면 

Swagger-ui페이지로 이동할 수 있습니다.

#### Swagger-UI

 

Swagger-UI는 에디터를 사용하는 과정에서도 확인할 수 있습니다. 네! 오른쪽에 있던 그 화면입니다.

하지만 다른 분들이 항상 에디터를 켜서 API를 확인할 필요는 없잖아요..? 그쵸?

그래서 독립적인 UI를 가진 페이지를 실행시킬 수 있습니다. Spec에 대해 확인이 가능하고 제작한 API에 대해 TEST도 진행할 수 있습니다. 사용법은 간단히 페이지에 접속하여 만지작 거리다보면 충분히 다 파악하실 수 있을 꺼라 생각합니다.

제작을 완료하면 이렇게 예쁜 UI로 구성된 페이지가 나타나게 됩니다![img](http://i1.daumcdn.net/deco/contents/emoticon/etc_14.gif?v=2)

![img](http://cfile4.uf.tistory.com/image/9971FC485B0AB225105BA4)

이렇게 Swagger를 이용하자 2편이 마무리 되었습니다.

사실 2편에서는 별다른 내용은 없고 정말 실행시켜보고 확인하는 과정이 주로 이루어졌는데

(1편에서도 별거 없긴했죠..?) Swagge에 대해서 능숙하게 다룰수 있는 상태는 아니지만 차근차근 구조와 사용법을 익혀간다면 효율 100%의 Swagger를 이용할 수 있을꺼라 생각합니다. 해당 포스팅은 처음해보는 과정을 통해 고통받은 제가 다른분들에게 조금이나마 도움이 될 수 있는 자료를 만들고 싶어서 작성하게 되었습니다

감사합니다!

 



## Overview
This server was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate a server stub.

### Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:3000/docs
```

