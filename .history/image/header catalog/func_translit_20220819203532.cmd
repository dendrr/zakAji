@Echo Off
:: ����஢�� 䠩�� ��ਫ��� DOS (866)
SetLocal EnableDelayedExpansion
:: ���� � ��ࠡ��뢠���� �����
Set Folder=D:\Programs\OpenServer\domains\ZakAji\image

:: ���᮪ �����
Set preset=�_a �_b �_v �_g �_d �_e �_yo �_zh �_z �_i �_i �_k �_l �_m �_n �_o �_p �_r �_s �_t �_u �_f �_kh �_c �_ch �_sh �_sh �_. �_y �_. �_e �_yu �_ya �_A �_B �_V �_G �_D �_E �_Yo �_Zh �_Z �_I �_I �_K �_L �_M �_N �_O �_P �_R �_S �_T �_U �_F �_Kh �_C �_Ch �_Sh �_Sh �_. �_Y �_. �_E �_Yu �_Ya

:: ��᫥ �஢�ન ᫮�� ECHO 㤠����
For /F "tokens=* delims=" %%A In ('Dir /S /B /A:-D "%folder%"') Do (
	Call :_translit "%%~nA"
	 Ren "%%A" "!Result!%%~xA"
)
Pause
Exit

:_translit
Set Data=%~1
Set Data=%Data: =_%
Set Result=
:_loop
Set Char=%Data:~,1%
For %%I In (%preset%) Do For /F "tokens=1,2 delims=_" %%A In ("%%I") Do If %Char%==%%A Set Char=%%B
Set Result=%Result%%Char%
Set Data=%Data:~1%
If Defined Data GoTo _loop
GoTo :EOF