@Echo Off
:: Кодировка файла Кириллица DOS (866)
SetLocal EnableDelayedExpansion
:: Путь к обрабатываемой папке
Set Folder=D:\Programs\OpenServer\domains\ZakAji\image

:: При замене командой SET (как выяснилось) заглавные и маленькие буквы не различаются
:: Всвязи с этим не смысла использовать полный список (с маленькими и заглавными буквами), достаточно любой половины
:: Здесь использована половина с маленькими буквами, поэтому после транслитерации новые имена окажутся в нижнем регистре
:: Если требуются имена в верхнем регистре, то следует использовать половину с заглавными буквами

:: Список замен
:: Set preset=а_a б_b в_v г_g д_d е_e ё_yo ж_zh з_z и_i й_i к_k л_l м_m н_n о_o п_p р_r с_s т_t у_u ф_f х_kh ц_c ч_ch ш_sh щ_sh ъ_. ы_y ь_. э_e ю_yu я_ya А_A Б_B В_V Г_G Д_D Е_E Ё_Yo Ж_Zh З_Z И_I Й_I К_K Л_L М_M Н_N О_O П_P Р_R С_S Т_T У_U Ф_F Х_Kh Ц_C Ч_Ch Ш_Sh Щ_Sh Ъ_. Ы_Y Ь_. Э_E Ю_Yu Я_Ya
Set preset=а_a б_b в_v г_g д_d е_e ё_yo ж_zh з_z и_i й_i к_k л_l м_m н_n о_o п_p р_r с_s т_t у_u ф_f х_kh ц_c ч_ch ш_sh щ_sh ъ_. ы_y ь_. э_e ю_yu я_ya

:: После проверки слово ECHO удалить
For /F "tokens=* delims=" %%A In ('Dir /S /B /A:-D "%folder%"') Do (
	Call :_translit "%%~nA"
	 Ren "%%A" "!Data!%%~xA"
)
Pause
Exit

:_translit
Set Data=%~1
Set Data=%Data: =_%
For %%I In (%preset%) Do For /F "tokens=1,2 delims=_" %%A In ("%%I") Do Set Data=!Data:%%A=%%B!
GoTo :EOF