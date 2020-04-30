:root {
  --color0: rgb(27, 171, 190);
  --color1: rgb(94, 163, 185);
  --color2: rgb(213, 180, 235);
  --buttSize: 150px;
}

.myButton {
  height: var(--buttSize);
  width: var(--buttSize);
  background-color: var(--color2);
  margin: .8%;
  float: left;
  border-radius: 8%;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
}
.myButton:hover {
}

.noBackgroundImg{
  background-image: none !important;
}

#textBox{
  border: none;
  height: 20px;
  width: 110px;
  margin: 5px;
}

.textBackground{
  background:rgba(1,1,1,0.5);
}

.secondaryButton{
  height: 30px;
  width: 110px;
  margin-left: 5px;
  border: none;
  border-radius: 4%;
}

h5{
  margin-top: -5px;
  margin-bottom: 2px;
  margin-left: 2px;
}

.lightUp{
  filter:brightness(120%);
}

.primaryButton{
  margin: 10px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
  border: none;
  line-height: 1;
  border-radius: 2px;
}
.primaryButton:hover {
  filter:brightness(110%);
}

#delBtn{
  background-color: red;
  color: white;
}

.editBtnOff {
  background-color: white ;
  color: var(--color0);
}

.editBtnOn {
  color: white;
  background-color: var(--color0);
}

.addButtonWrapper {
  height: 150px;
  width: 150px;
  background-color: transparent;
  margin: .8%;
  float: left;
  border-radius: 8%
}
.addButton {
  text-align: center;
  margin-top: 50px;
  max-width: 100px;
  max-height: 100px;
  background-image: url("plus.png");
}
.addButton:hover {
  filter:brightness(110%);
}

#settings {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: var(--color1);
}

.bigSettingWrapper {
  height: 135px;
  float:left;
  background-color: var(--color1);
}
.bigSettingWrapper:hover {
  filter: brightness(110%);
}

.smallSettingWrapper {
  height: 80px;
  display: flex;
  margin: 5px;
}

.deleteWrap{

}
.textWrap{

}
.backgroundWrap{

}
