## Gerar o .AAB
````
npx react-native build-android --mode=release
````

## Gear o APK
````
yarn android --mode release
````

## Importar variáveis de key para gerar .aab

No diretorio :

```
~/android/gradle.properties
```

Adicionar no fim

```
MYAPP_RELEASE_STORE_FILE=personal-faltou.jks
MYAPP_RELEASE_KEY_ALIAS=personal-faltou
MYAPP_RELEASE_STORE_PASSWORD=****
MYAPP_RELEASE_KEY_PASSWORD=****
```

Depois chamar as variáveis em 'app/build.gradle'

```
 signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
```

Adicionar a keystorage em "android/app/sua.jks"

[link sobre assunto](https://reactnative.dev/docs/signed-apk-android)

## Adicionar novas funcionalidade

Add logica de importar icones para o app como assets

[gerador de icone](https://easyappicon.com/)

---

Add logida de importar fontes icon para o app

```
node_modules/react-native-vector-icons/Fonts
```

```
android\app\src\main\assets\fonts
```
