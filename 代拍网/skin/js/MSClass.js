<!--
/*MSClass (Class Of Marquee Scrollͨ�ò���Ϲ���JS��װ��) Ver 2.5*\ 

������ʱ��:2006-08-29 (Ver 0.5) 
������ʱ��:2006-08-31 (Ver 0.8) 
������ʱ��:2011-04-27 (Ver 2.5) 
������˵��: + ���빦�� * ���������� 
	2.5.110427 
	+ ����ֱ������ֵ(�轫AutoStart����Ϊ1�����Զ����й���,�汾���¼��ݣ���Ӧ��ʵ��) 
	+ DIV+CSS֧��(UL+LI,DL+DT+DD,�����ر�����,��ͬʱָ������ID������ID,�����Ӧ��ʵ��) 
	+ Slide����(���õ�Ƭ����,֧��ҳ�뼰TAB��ʽ�л�����-��ָ��ҳ������/TAB����ID) 
	+ LanternЧ��(���õ�Ƭ����Ч��,��SwitchType���ó�1�����˹���) 
	+ ˫����������Ч��(��Խ������Direction=-1|4��Ч,����SwitchType���ó�1�����˹���) 
	+ FadeInЧ��(������Ч��,��SwitchType���ó�2�����˹���) 
	+ RevealTrans�˾�Ч��(IE��Ч,��IE�Զ�ת��Ϊ����Ч��,��SwitchType���óɴ���3�����ֿ����˹���) 
����* ������� 
	2.0.110401 
	+ ��������(��Step���ó�С��1������(����ϵ��)���ɿ�����������,��0.1,��ֵԽ��,����Խ��) 
	+ ����϶�(�����������������������������϶�����) 
	+ �����ȴ�ʱ�书��(��Լ�Ъ����,��ֹͣ״̬�¿����������ӳ�ʱ��(DelayTime)) 
	+ Ĭ��ֹͣ����(��Լ�Ъ����,��WaitTime���ó�60000(1����)��DelayTime�������ã����ó�100000��DelayTime��������) 
	+ �����������(����������ͷ���Զ��������,Direction=-1���½���,Direction=4���ҽ���) 
	+ �߽�״̬�жϹ���(��Խ����������OnBound��UnBound�¼�,ʹ���߿ɶ�ʵ��Ӧ���������Ӧ�¼�����,�����Ӧ��ʵ��) 
	* �����Ż� 
	+ Slide����(���õ�Ƭ����)��MARQUEE��ǩ�Զ�������(It's A Joke,Please Wait ��) 
	����
	Version History:1.65.071228��1.6.070131��1.4.061211��1.2.060922��1.0.060901��0.8.060829 
	�汾˵����鿴http://www.popub.net/script/MSClass.html

����ʾ˵��:http://www.popub.net/script/MSClass.html 
�����ص�ַ:http://www.popub.net/script/MSClass.js 

��Ӧ��˵��:ҳ�����<script type="text/javascript" src="MSClass.js" charset="gb2312"></script> 
��
������ʵ�� 
����//����ֱ�Ӹ�ֵ�� 
����new Marquee("Marquee") 
����new Marquee("Marquee","top") 
����...... 
����new Marquee("Marquee",0,1,760,52) 
����new Marquee("Marquee","top",1,760,52,50,5000) 
����...... 
����new Marquee("Marquee",0,1,760,104,50,5000,3000,52) 
����new Marquee("Marquee",null,null,760,104,null,5000,null,-1) 

����//������̬��ֵ�� 
����var Marquee1 = new Marquee("Marquee")��*�˲�����ѡ 
����Marquee1.Direction = "top";�����ߡ�Marquee1.Direction = 0; 
����Marquee1.Step = 1; 
����Marquee1.Width = 760; 
����Marquee1.Height = 52; 
����Marquee1.Timer = 50; 
����Marquee1.DelayTime = 5000; 
����Marquee1.WaitTime = 3000; 
����Marquee1.ScrollStep = 52; 
����Marquee1.Start(); 

����//����ֱ�Ӹ�ֵ�� 
����new Marquee( 
����{ 
������MSClassID : "Marquee", 
������Direction : "top", 
������Step�� : 1, 
������Width�� : 760, 
������Height�� : 52, 
������Timer�� : 50, 
������DelayTime : 5000, 
������WaitTime : 3000, 
������ScrollStep: 52, 
������AutoStart : 1 
����}); 

������˵�� 
����ID���������� "Marquee"������ID������������(��ѡ) 
����Direction����(0)���������������򡡡�������(��ѡ,Ĭ��Ϊ0���Ϲ���) ֵ:-1,0,1,2,3,4(0�� 1�� 2�� 3�� -1���½��� 4���ҽ���) 
����Step�������� (1)�������������Ĳ�����������(��ѡ,Ĭ��ֵΪ2,��ֵԽ��,����Խ��) 
����Width��������(760)�������������ӿ�ȡ�����(��ѡ,Ĭ��ֵΪ������ʼ���õĿ��) 
����Height������ (52)������ �������Ӹ߶ȡ�����(��ѡ,Ĭ��ֵΪ������ʼ���õĸ߶�) 
����Timer��������(50)������ ��ʱ��������������(��ѡ,Ĭ��ֵΪ30,��ֵԽС,�������ٶ�Խ��,1000=1��,���鲻С��20) 
����DelayTime����(5000)���� ��Ъͣ���ӳ�ʱ�䡡(��ѡ,Ĭ��Ϊ0��ͣ��,1000=1��) 
����WaitTime���� (3000)���� ��ʼʱ�ĵȴ�ʱ�䡡(��ѡ,Ĭ�ϻ�0Ϊ���ȴ�,1000=1��) 
����ScrollStep�� (52)������ ��Ъ������ࡡ����(��ѡ,Ĭ��Ϊ������/�߶�,����ֵΪ-2��DelayTimeΪ0��Ϊ�����ͣ����,-1��ֹ������) 
����SwitchType�� (0)���������������͡���������(��ѡ,Ĭ��Ϊ0����,��ѡֵ1����,2����) 

\***��������/��Ȩ����:������(333) E-Mail:zhadan007@21cn.com ��ַ:http://www.popub.net***/ 

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('I 1w(){K b=1v;K a=1h;b.46="45 44 1w 1yͨ�ò���Ϲ���43��װ��\\42 41 2.5.40 ����/��Ȩ ������(3Z)\\3Y:3X@3W.3V 3U://3T.3S.3R";b.A=a[0]["3Q"]||a[0]||a[0][0];b.F=1o b.A=="1Z"?N.1e(b.A[0])||N.1e(b.A.2X):N.1e(b.A);v(!b.F){T 1R("��Ҫ���õ�["+(b.A.2X||b.A[0]||b.A)+"]��ʼ������\\n�����ǩF�����Ƿ���ȷ!")||(b.F=-1)}b.1E=b.1Q=0;b.m=b.p=b.q=b.r=b.s=b.B=b.u=b.k=b.e=b.a=b.b=b.c=b.d=b.f=b.g=b.h=b.i=b.j=b.o=0;b.n={3P:-1,3O:-1,1U:0,3N:0,3M:1,3L:1,1q:2,3K:3,3J:4};b.G=a[1]||a[0]["G"]||0;b.L=a[2]||a[0]["L"]||1;b.Y=a[3]||a[0]["Y"]||0;b.X=a[4]||a[0]["X"]||0;b.13=a[5]||a[0]["13"]||30;b.V=a[6]||a[0]["V"]||0;b.18=a[7]||a[0]["18"]||1x;b.J=a[8]||a[0]["J"]||-10;b.P=a[9]||a[0]["P"]||0;b.F.H.2F=b.F.H.2E=b.F.H.2D="2C";b.F.H.2G="3I";b.2a=(3H.3G.1S().3F("3E")==-1);b.15=(N.28)?1:0;v(a.Z>=7||a[0]["3D"]==1){b.2W()}}1w.2k.2W=I(){v(1v.F==-1){T}K n=1v,c,d,e,l,r;K o="3C";v(n.13<20){n.13=20}v(n.18<1x){n.18=1x}v(n.Y==0){n.Y=Q(n.F.H.1d)}v(n.X==0){n.X=Q(n.F.H.1r)}n.F.H.1d=n.Y+"M";n.F.H.1r=n.X+"M";v(1o n.G=="2s"){n.G=n.n[n.G.2r().1S()]}c=n.G>1?"<1B 2R=\'0\' 2Q=\'0\' H=\'2P-1C:1C;1Y:2L;\'><1m><19 1W=1u H=\'2V-2U: 1V;2T-1g:2S-28;\'>1k</19><19 1W=1u H=\'2V-2U: 1V;2T-1g:2S-28;\'>1k</19></1m></1B>":"<1B 2R=\'0\' 2Q=\'0\' H=\'2P-1C:1C;\'><1m><19>1k</19></1m><1m><19>1k</19></1m></1B>";d=n.G>1?n.Y:n.X;e=n.G>1?"3B":"3A";n.d=n.G>1?"3z":"3y";n.R=n.G>1?"1q":"1U";v(n.G>4){n.G=2}v(n.G<-1){n.G=0}n.b=11.1n(n.Y/2);n.c=11.1n(n.X/2);n.1z=n.F.S;v(n.L<1){n.k=n.L}v(n.P>0||(n.V>0&&n.J==-10)){n.J=d}v(n.J==-10){n.J=1f}n.1E=n.L;v(n.P>1){n.P==2?n.p=1:n.q=n.15?n.P:1-(n.p=1);v(n.15&&n.q>0){n.F.H.2z="1c(3x="+(n.V/3w*0.2)+",1T="+(n.q-10)+")";v(n.q>=33||n.q<10){n.F.1j.1c.1T=11.1n(11.2v()*22)}n.F.1j.1c.2u();n.F.1j.1c.2t()}n.L=d;n.k=1-(n.P=1)}K b=I(j,i){T n.15?(j.27[i]!="2O"&&j.27[i]!="2N")?Q(j.27[i]):0:(U.26(j,1f)[i]!="2O"&&U.26(j,1f)[i]!="2N")?U.26(j,1f)[i]:0};v(1o n.A=="1Z"&&(!n.A.Z||n.A.Z>0)){n.D=N.1e(n.A[1])||N.1e(n.A.3v);v(n.D){K g=0;K a=0;v(n.D.3u=="3t"){n.D.H.3s="0"}n.D.H.3r=n.D.H.3q=0;n.D.H.2M="1X";1p(K h=0,f=n.D.1l.Z;h<f;h++){K q=n.D.1l[h];v(q.2K==1){a++;q.H.2M="1X";q.H.2J=q.H.2I="1q";q.H.1Y="2L";q.H.25=b(q,"25");q.H.24=b(q,"24");q.H.23=b(q,"23");q.H.21=b(q,"21");v(n.G>1){g+=q[e]+Q(q.H.25)+Q(q.H.24)+Q(q.H.23)+Q(q.H.21)}}}n.G>1?(n.D.H.1d=g+"M")||(n.D.H.1r=n.X+"M"):(n.D.H.1d=n.Y+"M")||0;n.C=Q(n.F[e]/n.J);n.B=n.t=1;n.$=[];v(1o n.A=="1Z"&&(!n.A.Z||n.A.Z>1)){K m=N.1e(n.A[2])||N.1e(n.A.3p);v(m){n.J=d;v(n.L>=n.J){n.L=d-1}K p=Q(n.F[e]/n.J);n.C=m.1l.Z;K k=0;1p(K h=0;h<n.C;h++){v(m.1l[h].2K==1){v(p==k){m.1l[h].H.1Y="1X";3o}n.$[k]=m.1l[h];n.$[k].1D=(I(i){T I(){n.u=1;1p(K s=0;s<n.$.Z;s++){n.$[s].1i=""}n.$[i].1i=o;n.2A(i)}})(k);n.$[k].1t=(I(i){T I(){n.u=0;v(n.i==0){14(n.o);n.o=1s(n.h,n.13)}O{1A(n.f);n.f=1b(n.16,n.V)}n.2B(i)}})(k);k+=1}}n.C=k;n.r=n.C>1?1:0;v(n.$.Z>0){n.$[0].1i=o}v(p>n.C){n.s=p-n.C;1p(K f=0;f<n.$.Z;f++){n.$[f].1D=n.$[f].1t=I(){}}n.C=p;1R("����["+n.F.1G+"]���õķ�ҳ|3n��Ŀ��ʵ��ҳ����["+n.s+"]ҳ\\n��ع��ܱ��Զ����Σ����ʵ��")||0}}}v(n.P==0&&n.p==0&&n.q==0&&n.G>=0&&n.G<=3){v(n.G>1){n.D.H.1d=g*2+"M";n.D.H.1r=n.X+"M";n.D.S+=n.D.S}O{n.D.H.2J=n.D.H.2I="1q";n.D.H.1d=n.Y+"M";n.F.S+=n.F.S}}}}v(n.B==0&&(n.G==0||n.G==1)){n.F.S=c.2H(/1k/g,n.F.S)}O{v(n.B==0&&(n.G==2||n.G==3)){n.F.1W=1u;n.F.H.3m="1V";(n.J==0&&n.V==0)?n.F.S+=n.F.S:n.F.S=c.2H(/1k/g,n.F.S)}O{v(n.G==4||n.G==-1){n.G=6%n.G;n.e=1}}}l=n.J;r=n.G;v(n.P>0){n.E=N.3l("3k");n.E.H.1d=n.Y+"M";n.E.H.1r=n.X+"M";n.E.H.2G="3j";n.E.H[n.R]=n.G%2?-d+"M":d+"M";n.G>1?n.E.H.1U="0":n.E.H.1q="0";n.E.S=n.F.S;n.E.H.2F=n.E.H.2E=n.E.H.2D="2C";n.F.3i(n.E);n.E[n.d]=d}n.h=I(){n.k>0?n.L=11.3h((n.J-n.g)*n.k):0;n.1y()};n.2B=I(j){v(n.P>0&&(n.p==1||n.q>0)){j+1>=n.C?n.E[n.d]=0:n.E[n.d]=d*(j+1)}};n.2A=I(j){1A(n.f);14(n.o);v(n.P==0){n.t=Q(n.F[n.d]/l)+1;v(n.t>n.C){n.t-=n.C}j+=1;n.u=1;v(j<=n.t){n.J=l*(n.t-j)+n.F[n.d]%l;n.G=n.G>1?3:1}O{n.J=l*(j-n.t)-n.F[n.d]%l;n.G=n.G>1?2:0}}O{v(n.i==0&&n.e==1){n.G=n.G>1?5-n.G:1-n.G;r=n.G}n.G%2?n.E.H[n.R]=-d+n.F[n.d]+"M":n.E.H[n.R]=d+n.F[n.d]+"M";j==n.C?n.E[n.d]=1-(n.t=1):n.E[n.d]=d*(j);n.t=j+1}n.g=0;n.16()};n.2w=I(){1A(n.m);K i=5;(I(){n.15?n.F.H.2z="3g(2y="+i+")":n.F.H.2y=(i/2x);i+=5;v(i<=2x){n.m=1b(1h.3f,20)}})()};n.16=I(){v(n.p==1){n.2w()}v(n.q>0){v(n.q>=33||n.q<10){n.F.1j.1c.1T=11.1n(11.2v()*22)}n.F.1j.1c.2u();n.F.1j.1c.2t()}v(n.j==1){n.f=1b(n.16,n.V)}O{14(n.o);n.g=n.i=n.1Q=0;v(n.B==1&&n.u==0){n.t=Q(n.F[n.d]/l)+2;v(n.e==1){v(n.P==1){v(n.t>n.C){n.t=1}}O{v(n.G%2){n.t-=2;v(n.t<=0){n.t=1}}O{v(n.t>=n.C){n.t=n.C}}}}O{v(n.t>n.C){n.t-=n.C}}v(n.r==1&&n.s==0){1p(K j=0;j<n.C;j++){n.$[j].1i=""}n.e==0&&n.p==0&&n.q==0&&n.P==0&&n.G%2?n.$[n.t+n.C-2>n.C?n.t-3:n.t+n.C-3].1i=o:n.$[n.t-1].1i=o}}v(n.e==1){n.2q()}n.o=1s(n.h,n.13)}};n.3e=I(i){v(n.i==1){v(1h[0]){n.G=1h[0]}v(1o 1h[0]=="2s"){n.G=n.n[1h[0].2r().1S()]}v(n.G<0||n.G>3){1R("�������ô���!");T 12}1A(n.f);n.f=1b(n.16,0)}};n.2p=n.2q=n.3d=I(){};n.1P=I(){14(n.o);n.g=1-(n.i=1);n.J=l;n.G=r;v(n.u==1){T 12}v(n.e==1){v(n.P==1){n.G=n.G>1?5-n.G:1-n.G;r=n.G}O{v(n.F[n.d]==0||n.F[n.d]>=n.F[e]-d){n.1Q=1;n.2p();n.G=n.G>1?5-n.G:1-n.G;r=n.G}}}n.f=1b(n.16,n.V)};n.2l=I(){n.1a=n.F[e]/2;v(n.P==0&&n.F[e]<=d+n.L){n.F.S=n.1z;2o(n.1z);T}2o(n.1z);v(n.18>=3c){n.i=1;v(n.18==3b){n.V=2n}n.18=2n;T}1b(I(){v((n.J>=0&&n.B==0&&n.l)||(n.V==0&&n.J==-2&&n.l)){n.l()}n.16()},n.18)};n.P==1?n.1y=I(){n.g+=n.L;v(n.g>=n.J&&n.V>0){n.G%2?n.E.H[n.R]=(Q(n.E.H[n.R])-(n.J-n.L-n.g))+"M":n.E.H[n.R]=(Q(n.E.H[n.R])+(n.J-n.L-n.g))+"M";n.1P();n.F[n.d]=n.E[n.d];n.G%2?n.E.H[n.R]=-d+n.F[n.d]+"M":n.E.H[n.R]=d+n.F[n.d]+"M";n.t==n.C?n.t=1-(n.E[n.d]=0):n.E[n.d]=d*(n.t);T}2m(n.G){17 0:17 2:n.E.H[n.R]=(Q(n.E.H[n.R])-n.L)+"M";1g;17 1:17 3:n.E.H[n.R]=(Q(n.E.H[n.R])+n.L)+"M";1g}}:n.1y=I(){n.g+=n.L;v(n.g>=n.J&&n.V>0){n.G%2?n.F[n.d]-=n.J+n.L-n.g:n.F[n.d]+=n.J+n.L-n.g;n.1P();T}2m(n.G){17 0:17 2:v(n.F[n.d]>=n.1a&&n.e==0){n.F[n.d]-=n.1a}n.F[n.d]+=n.L;1g;17 1:17 3:v(n.F[n.d]<=0&&n.e==0){n.F[n.d]+=n.1a}n.F[n.d]-=n.L;1g}};1b(n.2l,1x)};1w.2k.l=I(){K f=1v;K a=z=1f;K c=w=x=y=0;I b(g){K g=g||U.W;v(f.V!=0||(g.2j&&g.2j!=1)||(g.2i&&g.2i!=1)){T 12}v(c==0){f.i=c=1;14(f.o);g.2h?g.2h():g.3a=1u;g.2g?g.2g():g.39=12;x=f.F[f.d];w=f.G>1?U.W?g.1O:g.1N:U.W?g.1M:g.1L;a=g.1F||g.38;z=a.H.1K;a.H.1K="37";v(f.15){a.36();N.1J("1H",d);N.1J("2e",e)}O{N.1I("2d",d,12);N.1I("2b",e,12)}}}I d(h){K h=h||U.W;y=f.G>1?U.W?h.1O:h.1N:U.W?h.1M:h.1L;K g=w-y+x;v(g<=0||g>=f.1a){g<=0?f.F[f.d]+=f.1a:f.F[f.d]=f.1a-g;w=f.G>1?U.W?h.1O:h.1N:U.W?h.1M:h.1L;x=f.F[f.d];g=w-y+x}f.F[f.d]=g}I e(g){v(f.15){a.35();N.2f("1H",d);N.2f("2e",e)}O{N.2c("2d",d,12);N.2c("2b",e,12)}f.16();c=f.j=0;a.H.1K=z;v(f.j==0||f.J==0){14(f.o);f.o=1s(f.h,f.13)}}v(f.e==0){f.15?f.F.1J("34",b):f.F.1I("32",b,12)}v(f.J==-2){f.F.1H=I(g){v(f.G>1){K g=g||U.W;v(U.W){v(f.2a){f.a=g.1F.1G==f.F.1G?g.29-f.F[f.d]:g.1F.31-f.F[f.d]+g.29}O{f.J=1f;T}}O{f.a=g.2Z-f.F[f.d]}f.G=f.a>f.b?3:2;f.L=11.1n(11.2Y(f.b-f.a)*(f.1E*2)/f.b)}};f.F.1t=I(){v(f.L==0){f.L=1}}}O{f.F.1D=I(){f.j=1;14(f.o)};f.F.1t=I(){f.j=0;v(f.i==0){14(f.o);f.o=1s(f.h,f.13)}}}};',62,255,'|||||||||||||||||||||||||||||||if||||||||||ID|Direction|style|function|ScrollStep|var|Step|px|document|else|SwitchType|parseInt|TL|innerHTML|return|window|DelayTime|event|Height|Width|length||Math|false|Timer|clearInterval|IsIE|Continue|case|WaitTime|td|ClientScroll|setTimeout|revealTrans|width|getElementById|null|break|arguments|className|filters|MSCLASS_TEMP_HTML|childNodes|tr|round|typeof|for|left|height|setInterval|onmouseout|true|this|Marquee|800|Scroll|tempHTML|clearTimeout|table|collapse|onmouseover|BakStep|srcElement|id|onmousemove|addEventListener|attachEvent|cursor|pageY|clientY|pageX|clientX|Pause|Bound|alert|toLowerCase|Transition|top|nowrap|noWrap|none|display|object||borderRightWidth||borderLeftWidth|marginRight|marginLeft|getComputedStyle|currentStyle|all|offsetX|IsNotOpera|mouseup|removeEventListener|mousemove|onmouseup|detachEvent|preventDefault|stopPropagation|button|which|prototype|Begin|switch|3600000|delete|OnBound|UnBound|toString|string|play|apply|random|Fade|100|opacity|filter|uRun|uOut|hidden|overflowY|overflowX|overflow|position|replace|cssFloat|styleFloat|nodeType|inline|listStyle|medium|auto|border|cellpadding|cellspacing|keep|word|space|white|Start|MSClassID|abs|layerX||offsetLeft|mousedown||onmousedown|releaseCapture|setCapture|move|target|returnValue|cancelBuble|100000|60000|Terminate|Run|callee|alpha|ceil|appendChild|absolute|div|createElement|whiteSpace|TAB|continue|TabID|padding|margin|fontSize|UL|tagName|ContentID|1000|Duration|scrollTop|scrollLeft|scrollHeight|scrollWidth|active|AutoStart|opera|indexOf|userAgent|navigator|relative|alterleft|right|down|bottom|up|alterup|altertop|MSClass|net|popub|www|http|com|21cn|zhadan007|nContact|333|110427|Ver|nMSClass|JS|Of|Class|CopyRight'.split('|'),0,{}))
//-->
