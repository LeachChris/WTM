fid1 = fopen('valueDollar.csv');
valueDollar = textscan(fid1,'%s %f');
fclose(fid1);