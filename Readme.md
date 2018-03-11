Обнаружила, что отступы в макете по вертикали разные, решила сделать как в большинстве случаев  - 29px для предоставленного разрешения.

Для самых маленьких разрешений скрыла картинки.

Для очень больших и очень маленьких разрешений увеличила размеры шрифтов для текста description.

Для ширины экрана 992px - 1200px сделала фиксированную ширину экрана, для остальных случаев ширина контейнера усановлена в процентах. Сделала так, чтобы добиться совпадения с 
представленным макетом, в реальных условиях, уточнила бы у дизайнера, как должна изменяться ширина контейнера. 

Для адаптивной типографики для разных брейкпойнтов указала фиксированный размер шрифта. Используя calc()+vw полного совпадения с макетом добиться не удалось.   

Для того, чтобы не прописывать фиксированную высоту у карточек и чтобы длинное описание не портило дизайн, 
описание так, чтобы его длинна не была больше 250 символов. Переносы строк удаляются.  

Для контролов (точки и сердечко) для мленбких разрешений добавила внутренний отступ 1em, чтобы клик сработал если
пользователь не попадет точно по элементу.

Размещение контроллов на фоне картинки у маленьких карточек - неоднозначное решение, 
на светлых фото контролы будут не видны.


//TODO
1. Иконки в svg
2. Позиционирование иконок поверх картинки для s карточек
3. Скрипт обрезки заголовков по строкам
4. Имя канала в data.js и в верстку