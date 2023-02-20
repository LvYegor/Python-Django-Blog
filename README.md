<h2 align="center">Blog</h2>


**Ссылки**:
- [Telegram](https://t.me/lavashalk)

### Описание проекта:
Блог об известных людях

### Инструменты разработки

**Стек:**
- Python >= 3.9
- Django >= 3.1.5
- sqlite3

## Запуск

##### 1) Клонировать репозиторий

    git clone https://github.com/LvYegor/Blog.git

##### 2) Создать виртуальное окружение

    python -m venv venv
    
##### 3) Активировать виртуальное окружение
    
Linux

    source venv/bin/activate
    
Windows

    ./venv/Scripts/activate

##### 4) Установить зависимости:

    pip install django==3.1.5
    python -m pip install django_debug_toolbar
    pip install  django-simple-captcha

##### 5) Выполнить команду для выполнения миграций

    python manage.py migrate
    
##### 6) Создать суперпользователя

    python manage.py createsuperuser
    
##### 7) Запустить сервер

    python manage.py runserver

##### 8) Ссылки

- Сайт http://127.0.0.1:8000/

- Админ панель http://127.0.0.1:8000/admin/





