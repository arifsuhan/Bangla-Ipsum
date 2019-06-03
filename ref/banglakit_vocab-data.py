
import csv


list = ""

with open("data.csv", "r") as f:
    reader = csv.reader(f, delimiter=",")
    for i in reader:
        # print("[\""+i[1]+"\" , \""+i[2]+"\"],")
        #list.append( "[\"" +i[1]+ "\" , \"" +i[2]+ "\"],")
        list+= "[\"" +i[1]+ "\" , \"" +i[2]+ "\"],"


f = open("demofile2.txt", "a")
f.write("posWord=[")
f.write(list)
f.write("]")
f.close()

