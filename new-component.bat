@echo off
:: Verifica se o nome do componente foi fornecido
if "%~1"=="" (
    echo Usage: create-component.bat [ComponentName]
    exit /b 1
)

:: Define o nome do componente
set COMPONENT_NAME=%~1

:: Caminho base absoluto para os arquivos
set BASE_PATH=%USERPROFILE%\OneDrive\Documentos\Projects\pessoal\personal-react-library\src\components\%COMPONENT_NAME%

:: Cria as pastas necessárias
mkdir "%BASE_PATH%"
mkdir "%BASE_PATH%\__docs__"
mkdir "%BASE_PATH%\__test__"

:: Cria os arquivos com EOF do tipo LF
(
    echo // filepath: %BASE_PATH%\index.tsx
) > "%BASE_PATH%\index.tsx" && unix2dos --info=lf "%BASE_PATH%\index.tsx"

(
    echo // filepath: %BASE_PATH%\styles.ts
) > "%BASE_PATH%\styles.ts" && unix2dos --info=lf "%BASE_PATH%\styles.ts"

(
    echo // filepath: %BASE_PATH%\types.ts
) > "%BASE_PATH%\types.ts" && unix2dos --info=lf "%BASE_PATH%\types.ts"

(
    echo // filepath: %BASE_PATH%\__docs__\Example.tsx
) > "%BASE_PATH%\__docs__\Example.tsx" && unix2dos --info=lf "%BASE_PATH%\__docs__\Example.tsx"

(
    echo // filepath: %BASE_PATH%\__docs__\%COMPONENT_NAME%.stories.tsx
) > "%BASE_PATH%\__docs__\%COMPONENT_NAME%.stories.tsx" && unix2dos --info=lf "%BASE_PATH%\__docs__\%COMPONENT_NAME%.stories.tsx"

(
    echo // filepath: %BASE_PATH%\__docs__\%COMPONENT_NAME%.mdx
) > "%BASE_PATH%\__docs__\%COMPONENT_NAME%.mdx" && unix2dos --info=lf "%BASE_PATH%\__docs__\%COMPONENT_NAME%.mdx"

(
    echo // filepath: %BASE_PATH%\__test__\%COMPONENT_NAME%.test.tsx
) > "%BASE_PATH%\__test__\%COMPONENT_NAME%.test.tsx" && unix2dos --info=lf "%BASE_PATH%\__test__\%COMPONENT_NAME%.test.tsx"

:: Mensagem de sucesso
echo Component "%COMPONENT_NAME%" created successfully at "%BASE_PATH%" with LF line endings!