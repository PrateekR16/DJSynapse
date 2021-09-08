import numpy as np
import cv2 as cv 
import dlib

img= cv.imread('pic.jpg')
ogimg=img
gray= cv.cvtColor(img,cv.COLOR_BGR2GRAY)
canny = cv.Canny(gray,125,150)
cv.imshow('cannys',canny )
contours,hierarchy=cv.findContours(canny.copy(),cv.RETR_TREE,cv.CHAIN_APPROX_NONE)
print(len(contours))

areas=[]

for cnt in contours :
     area=cv.contourArea(cnt)
     areas.append(area)


sorted_contours=sorted(contours,key=cv.contourArea,reverse=True)
largest=sorted_contours[0]
cv.drawContours(ogimg,largest,-1,(255,0,0),15)
cv.imshow('Largest',ogimg)
cv.waitKey(0)



