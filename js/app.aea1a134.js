(function(){"use strict";var e={9198:function(e,s,t){var a=t(5130),i=t(6768);const o={key:1,class:"main-content"},n={class:"sections"};function r(e,s,t,a,r,d){const c=(0,i.g2)("Terminal"),l=(0,i.g2)("HeaderNav"),v=(0,i.g2)("router-view"),u=(0,i.g2)("TheFooter");return r.isLoading?((0,i.uX)(),(0,i.Wv)(c,{key:0,onLoadingComplete:s[0]||(s[0]=e=>r.isLoading=!1)})):((0,i.uX)(),(0,i.CE)("div",o,[(0,i.Lk)("div",null,[(0,i.bF)(l)]),(0,i.Lk)("div",n,[(0,i.bF)(v)]),(0,i.Lk)("div",null,[(0,i.bF)(u)])]))}var d=t(4232);const c={class:"terminal"},l={class:"output"};function v(e,s,t,a,o,n){return(0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("pre",l,(0,d.v_)(o.terminalOutput),1)])}var u={name:"TerminalView",data(){return{commands:["systemctl stop sshd","systemctl status sshd","stranger@JOI-ubuntu:-$ ssh root@200.9.155.44 -p 22","The authenticity of host '200.9.155.44 (200.9.155.44)' can't be established.","ECDSA key fingerprint is SHA256:30TU65MUNxQzdq7l1lJI5k7z04CFABIJnyuQj0t6m5U.","Are you sure you want to continue connecting (yes/no/[fingerprint])? yes","Warning: Permanently added '200.9.155.44' (ECDSA) to the list of known hosts.","root@200.9.155.44's password:","_inux infra.seniorhost.com.br 4.19.0-17-amd64 #1 SMP Debian 4.19.194-1 (2021-06- 10) x86_64","The programs included with the Debian GNU/Linux system are free software;","Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent permitted by applicable law.","Last login: Sun Jun 27 21:48:49 2021 from","root@curriculo:~#"],terminalOutput:"",index:0}},mounted(){this.typeCommands()},methods:{typeCommands(){const e=setInterval((()=>{this.index<this.commands.length?(this.terminalOutput+=this.commands[this.index]+"\n",this.index++):(clearInterval(e),this.$emit("loadingComplete"))}),500)}}},p=t(1241);const m=(0,p.A)(u,[["render",v],["__scopeId","data-v-117aaa34"]]);var g=m,A=t.p+"img/iconCurriculo.psd.cdd14854.svg",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAHcVJREFUeNrs3U+OJDd2B+CkutFT6rWWgk5gn0Dnsxf2QTRbH0K+gH0DrQRBCwloqAUYoDvhga0xqlVZmfzz3uP39WYwyoxgMCKD/LEYwcsFAAAAAAAAAAAAAAAAAAAAAAAAgFiaKsC1DjfrqoCovlAFACC14DwD9RmZcKPHOQY06qxgyB0ACmQ36U1SBjAKkNzT5UuNjAYdQIOukVFnAOgIaJzUFwAa9TFMigMAidPxAyDJS+gAgITqGHH+kexwjs9I6G7mGnNwPXEEQ+4AoMfpGHAeYDN/ClC/EjoAVKFBB4ACmvI63zg3gRg+dh7Uj4QOAFKBMjpn6gAkXceb9pibhA6AznZ2T5/+Seh+MOoAJFbHXOB4I98YvZbWsTjvnNoonlA/3XkYy5A7AEgKkkuBY2rqFyTOoOU3+iChAyAQnUWDDgB6P3phwcre1BGU1pUnZD2EKKeEDgAS+jGprR1cBulavUiz6kN6l9DReIDfjfpAgw4AhO2xeS57X1001y0s0R1HiDo6avhdQgcASadMumrJ92OCoWOTiB2T9B67XiV0N3vA70ud8/Lp0KADQHIr10M/5W1qpwypm9jomO5laPycMvXDtrd93xI6AOj1p0oX0ZO5t9FJwJybbO23xnYkdJ0inEPQiUeDDgB6Z3qBW7bnbXR69Zyh0vPU0d/s1k+vUwkdACT00sk8UxrPlIqlbPWyOxWdVi898XnrG7+f7l3zMxO6GzeATqh2ZBFD7gCghxWqZxVhiLwdfJ6a3wGJdWUv/Wa3qEPvJsUBAPUS+q4JcKdMRPPedr/p6gn3lDqIkFIjpPYe6LxK6G7IGjxAxx4NOgCU66+1KVut2+us+Oa5U5a2PaF8fF5XvilliPR2tp7keKds++nypYQOANl9vPyWNqGvTqSRHu1qQc9J1EQrVVMpSUd/13imiXelEvqVhF6/YWnqHEjwm/N71aADANmG3DNOgMs8ae/0/Uka8XVl3VoffUG5esDy9YjnTkIHAAk9fELPNAEu6mS3jO+nl6rJnPhPWO509YS0HqD8ErqOkgZIXUK5+5Lf3AQadADQY1uyzRWTylrh8lXdth4/0WSf9LZr4ZRIw+87n0035A4AjE01kSZPRU3mLWFdnpDuM//upF3HFiFlZ0rHUSfIhUnoblDxG3MAHd3CDLkDgB7Rkp7V6KHtU4bZo5/bduDvhBhOXko1y3KnK4bf++LtTd5Ok9ABILunT/8ip7hZabgFKMspaTxSsj0lZe84zl68TnvhskRf7jRTUt8+Oa5SQtd4gOuddeeuyhsxy1y/htwBoIC3B/Uwd/f0og2Lt0BlqdK7Pjmp7jr2HvTY+qay9EHb7Au++9w2+p/8935BQgcAvep9vfO26XOjtx2hjjM8nhgl8VnWNX+ijl6mjPvL+L71vni/JsUV6OxEn7SRsTFHnatndRTt3hz+OtGgA4BeV4jttIXbm7nfEdvJlMbtg9G6fSzZR+Xh9wjPpBtyBwAJPU46aYM/2ybsu2Iyz/i+9uP+PkaaRJxpedRHtp0pqY86Ngm90M284hBuc/415oKN6yn5cTqHF0PuAKCHFTgpt4X7jboc6+peZ8QesuTNaJGWH521vUe3uWtYeuUEuR6g/iR0AKiYz9+GKUnuEYHTkrn3ycerS0k4zvnqD2xj9bvYb91mv+O7fdDnbv3u0e98v66HLqHXv+m3gsfkvOL36lrlDz5eftOgA4CEsH7odeVb4drEY5811N8CXiMSC6v1guXrgepmZvlHPC++YnJcj3iuJXQAkNDTJvRH3jJXOZlnfwe95E3WRN8Xl1lSL/j42okJvQX/rlnb4JrNUOboHfHsb/Z89bYNuQNAAW9VwfQeV+Vh9hagfjOnMKMZn9eDnou+cP99wndGfPe57dyz3z7gc6PqvMSz6xI6AEijy1LiiMlwq9/XXjGZR5/sJv2zM231QPvom46jBziWWRPk7llSdenkxQwJvfKElVbwmE4rn8YcQe+M30P4YzPkDgAF7JwUV/HZ44jD7C3oMUW9ZiTuc5JUX7DfXftoDx7z6IVTVnzueBI6AEjoevqB9x9pIl+0upfCeek66BP3MSu198GfjZbUH9nvS/soMArQJHQ3fecVilwnUTvBu4JCO+n3bz10ACjguh76zufQVzwXHv359l11GqH3vLpnLhHG1ZV5ah2MXkBkxXPqMxdWmbXYyoyFWso9hw4ATE4FM9PkivQ84m8sbVAdnZLMoy31KmVL91HLtHoUIFJSH/0Wuf7A/3cZ9F0JHTScuD5Dlssb5YLRoANAAZ5Dz9vDnDHMHnF4vTnXDDg3EZZj7Ru28blt9kH7m/X8drmlTSV0AGBqQs++8taKFw5Eeq97pmRu1bTaowQ9YP31TWWY+fa1Vdt5ZHsR386W+o1xXwz+YWSQuTFf1bnRmHOSjNdd1KdFmmsiV4MOAASzY1Jc5kcdMj1DvSKZV6oPPf749dA3lWvFfvugMo8exo8wOW1E+Y6YZCehA4AGHQCIwHPoY7XN2101AS76n01agXPO/XXdF+w36j5GDeH3B7Z975rrM+p15X43D+tbDx0A0ruuhz5zUY97vj9zoZOZy7DOSsiRkvmOa2X3Pqql76gT0lbqB2571nf7hP33BeXatVCLxVncTDVK6g3nNXVdqvNFNOgAUEClSXFVEnD2CXAZh8AtALO3fD3QsfTB2+0Ty7xi0tmoiXKv3V+EZ//TvQZWQgcACZ0CyWtUmaO/E9ochjrX2+o3xkVP7asWRNn13ZXXYM+8Dwkd0EmGAtevBh0ACsgw5D76rWTRJp2NLFdbXNdRh8VPWOxFyvm86G+Ki/CGsl1lGPW56AvKbCGhA4CETpD0uvrd6qcsvdpcdzfrSeogwmNkK9L/zIlyL30+3eNeEjpRGnM05jiv6hINOgBUUGHIvR1a9qwT4FrAc+5NcXvLH+FNcZGWz2wDtzG7fnc/vz3zLXgSOgCwvk9tUtzrkkbUR9lmbm93om6Lz7HkHTfdn/aGuNWJf/V72bO8nW1nkr+5/Nf10CV0NB7g2s8UTHjGx8tvGnQAqGDVkPvqoerovcQW/DhakeP0xrizEmaWN8RlWNzk3mfTV5Zx9jXWg56bz5LQAUBCT9uTP638K/92lulRPNfT7Xry44z0hridj1rtSpO3PHrWJx97lOOV0A9iQorjBPc+NOgAcCLPod/WMxyxMErUBVR2TYCLujhLlcmTGcrSN5d/1fPWs8o1ar8jljsdVa5d50FCBwAk9EzpxPGuHznImO5d2+Pr4bS3w92TNFdNlMvyZrdj072EDujoQgEadAAoIOukuF3vJI6eTtrEba8q1+xz6O1xtX4HWd4ON6Osmc5bH1wfp77JTkIHAAldKpg9StCK1EfUZO7tcef9Tmem9uipcsX74o9/PCzqT0FCz9dIon4hwu/G7ysQ66EDQAHX9dArDbm3g4+jSo/a2+Pylq8Hr48Ib4V7rnyzhtIzTAKbNXQ/89hD/7lBQgeAAk6fFGclsvHfzTp5LtI1ccJbA3uA8p3yVrh7UuXoJNoWlDnLCIKEjk4Lrkt0FNGgA0BpnkOf01tc8ex5C3Ccj3zn5GF2qePleuiL9983by/TMqWRynDym/gkdACQ0MmU2pa/s/zXX3/957/85S//6FT+ud67hP7ShdVa+bT1008/fff1119/FzxR754cF6EONOic59qYv3v37ls1AS97//7998kCRw+8PS6G3AFAQg/em9zx3ejHlv3Y4QQZ3wo3c0LgyiHyVXU55ZgkdACQ0JenwewJstkHMDEtzlwCNeNksorpXkLXmAO4Z1Q+lRp0AEjuuh56tElx2VNsC3i8o8qgJw/7f6ce9eJZ1/XQJXQAKMCLZeolaYDXTNDa9Ta45z73SFmOH8WQ0HUoANCgAwARVBhyl17nPtOvfmGC3vsff1+nvBXu5Hvz9LqS0AFAQi+V7trC7VZMvZI8PP776cm2XaWOSvhiQeVrjAD234uaOtKgAwDBvWbIXa8of4/aRDiod+8Z/fz4qG1Gnzx3a/nSTAKU0AHgsITOWaMDmcoAknfeslqWVUL3o1cGwD1NmTXoAFCoP6RBB8ifbNuNafHWz2U6ph3bC+e6HroGHQCSu66HXm1SXLvzv438zsrtjd6vx9og3v2sH7Zv9X+nLwpW/inbi75fwG8YDToA8BqeQ4/Xo24Ttw2cce/pN37uls9mvv8e9ScDCR0AJHQK9miNDkDe5B21fLPeO28pVQkdjTmw8X6CBh0AeI4h97o9UT1lYOR9pC/cn6F0DTo7/f777/+xep+9dx0Xouit3X45fvjw4QdVxq4U1wZvuw3+zuj9PfL4WHug/kY9thb9czu+E3EfO/cXpiEssq++8Lt94Gf74H32wdvog4+tP1DmPngfQ+ve39Cp3hHVmFOxnl0vaNABoKIMf0M/pSfaDitXcx6krD+ph75gf33icfSE9W8iWvKfkYQOAMld10M3yz1PCrOa3Nx9VPy7fIXfTU++DylZ3SxxXQ9dQj+rU4DG3LmJfW5cJ9xNgw4ABWQdcjehSu/etXpeHZpodt8+Rk3We+3++sSyIKEDgIQuUbGrfjM+Ouc6ypV6TbxCQgcdLI25+gUNOgAwgCF3HklA0rPkuPs8Rn/b2z3b2zX8f/KEtRJ/cpHQAUBCRzpFvUpWuGYkdNCY4zyABh0A+B9Rhtyz9K6lgHX11py7befE8PXf11FPdC77wdfx8dethA4ABfo2JsXFTkpSZc7zlr1ct26jBz32Hvzc7Hx8LduoQz/keB92XQ9dQtcoAO4Tjj0566EDQBE7htxb0X1V6MU29Zrq2CMu19sD1YvJfRxFQgcdRB0e0KADABGY5U7ldNfU0dYy9oJ1bhj/9vrwfPzi45bQAUBC57B0eGodNGUYVuZdS4JK1pS/njTobr7D/PLLL//09PT0D/d+v/euI/T5eqnxw2hO7/WUXuvhxx9//Os333zzV9WBBp1wro35u3fvvlUT8LL379//u1pAgy4Nqx9gxX3DnyoSMSkOACR0ACTrpcdW9fgkdABAgw4ABTQNOkCKu3W9Ca4Vj2kb66EDQAHWQweAIjToAKBBBwAiOPE5dEt0Ok44nWe6JXQAQIMOAGjQAQANOgBo0AEADToAMJHlU/E4GoCEDgBo0AEADToAcGU9dABIz3roAFCA9dABoAgNOgBo0AEADToAoEEHADToAKBBBwA06ACABh0A+CPLp9L/8L8fWkr148eP//nqnff+8H7TVnzvrr7/p7VzLoUPHz784Iwz9Pcz6bN/9vn2ym2/9PlHvnsZXJbX1lUbVOdtwTluE6+vtvG6XlWmXfvI3MGMvI++qSx9wnb7A9vpm/bRB+xj1P9363777PNpyB1AB4oCDLkDaMgpQEIHgPSshw67U1KXltQDPMp66ABQgPXQx6ULANjqxElxw567fmabTb2pP0AY2kFCBwANOkgP0orzinMYgefQ4eUbRyu6v5NuzD1hme/Zb3e9SOgAgIQOSOpSFkjoAIAGHSAhoxUMZcidyjdKz7VrvLq60NnYUC9b6k9CBwAJXRq7oXfWlMU1NjANtIT1hpSKhA4AaNCp2vNXR6h7+DvWQ2f+DbAv+I56VT7Hw9Gshw4ABVzXQ6/+2NopE8JGTdq6dTtZHgsbff6jXU+7J831BOe9yv3rtLoZNfHuqJEVCR0ANOgAFE70JPJ240XnmWjYd1NvBRuGftj2NORI6AAgoUs/tyScUds7eTRj9LFH3172NAuZr/0SvwcJHQAkdPg/v//++7+9e/fuWzUBL/v555//9auvvvqXJAkWDfqrLyAT5QA05NzBkDsASOgk7oFXfHMaSMqOTUIHADTo6EUDftdsZMidl378htIhdwPdk+6PV7EeOgCkd10PXUIfm0x3p1qT1KB22lY3POu6HrqEDgAFZG3Q9dgA4A8yD7lnmbR1yuQynSzw20VCBwBOTehVe8nthR706uU/Pb4G+dJ0L358SOgAoEHXYwMYpLWW6d7mPpzA22QXk2FfoJKufJyU0AGAIgld8nds4F6Vt3z9sPqQ0AEADTpze7p6xCD5O7bAPIf++MXSDjoWw/igg35KQ56ujiR0AEjPeuhZe5+Gv+Gc33rfuG+SuK6HrkEHgOSshz63d3vL/3d54HOXTdsD8tx3HNNB98O3B17sbeP+dk0+i749YE0j1Qsek2DzNxI6AEjoYXt0LeD2MtWh5A110umuskZ/hK5XO0cSOgAUoEHXiwdwbynAm+Jq/PBagB++YXrI3fBqyJPXi4QOABI6yVLqrWWVvKFOCuzq6Iwya9AZ5qeffvru/fv33998pff7r/VP3y3Z0fhbnZzQieqt1TrMT8fzqgv6hx9++P4CI6/BSZ+95Tvtjn20AdsZtd9Z5Zv5uUhlaIuu2xXb2fm7lLbilGX1Y1B90+du/fwj++0BttcnfXfauXmz6GYzqqGb1aCvaIBnNuwRGvQVZZnV+GVqQDOU9bS3ka1syHvx89sPuO6mMSkOAArwN/Qa7nl8bdd75UfvY0T5sk5sRB2OOMZdj7+5loeyHjoApGc9dKQuXCdQwHU99LeFfqCel453w2wJr4XnbviuLQ34yO31AMdBQRI6ABQQLaGvSHf37KPyO9Nnvj2u3/n5USm7TagjqV0qX7WdCM+mRxglyPIo2/ZRFAkdAArQoO/tvVktqXiPGfzmtt0Pj/M26cXSkpbvuf8+a3i4JT8Po/Yxq6yG4et32rJMgMv09rgIDXkPUJdT9iOhA4CEPqyHMis9VUxMM49tRZptm66TFYlaas+bxkfvoxepw+6ayENCBwANOgBJSLPFWZzl8xd9cxyvukGseKY/8wTC5xiO39voRHrKJNoz5zoJEjoAsMObO77TJnynvfI7bcA27tnHPfXQBh73jOMYfb7bomtqdtqNlp6rjBhV3P/KZJ71sarXPq4W9VG80CMSEjoApGc99BN0x6neXIM4r7Vd10M35D62zJdJx3FZUJYd531k+WZsZ9V2Oaujl/3tcZ5ND+i/Pv2T0AGggEqPrWVcFnX1caxYnnb1sa88r94Ed2Yaq7h86oq69LjcYhI6AGjQ0cuU3lQz+N1E4E1xt11w7U/++63D3O3O/56lPkYf26jh7T5gG4/cnAzJn9lBy/Rs+so3zvVN57gHuLYkdADgZVkfW7vnu7MeUWsT62BmnY9IkBm/GylFS+9701H2d7mDhA4AGnSQELPvF157DbpWEzApLt4Pq238QbcDvnvrDattqP/XasGv5VPK1At/d9Sz8Kc9cbKlLBI6ABQQeVLcI98dPcluxHGs3sc9n9+9jKl3uVM5je9O5bOTeYUy9WDXm4QOAKfRoNdPFyazqEvYmXD9bpZoZYfcn/tvWYbcX/rciiHtCEPfGZ81NyRfv3Hatb2esK56keukZyj/0+VLCR0Asvt4+W1ZQn8kAbfg23ukbqK+PW506ow62c0b4s5M3pXT+CPbiLpcaw9cz6FI6ACgQefAJAPSOQRkyP3+41yxYMuIsoz6TqTh7plD1tGHwzMM1/dDyxdh+DfCc9Q6SBI6AHCvCu9y3/UO9NE92TbgczPrbXQZRr3LfVa9RE3H0k+MOuqBthN1Mlv2cyOhAwAadADgDtWXT50xVB1xv4/82eGeso7+M8eI7c0chv+zfVw2XWOn6wn3FWHy2azh8tXHlnEi3/R9SOgAUECGBn1XTyzjxIp+yLm5FD6H+G1mS+cEkeE59Jnfzbx+eZt4nk5ZVGX3ELkh+jiNRU+y3WgNecaAVDbUGXIHAAldQr/MXZJ0ZfkypPUTUnuG8mcffu0J66UnLMvo0YQe6LrsEX/6EjoAJPf06V+lBt3CDjXT1CnHpO6V3/XuN3K3LOuh37Pv9sD/d5n0uQgLqFSZKLdrHzv3R6wbaQ+67Z6wLl1/gxhyB4ACoiX0FYl615KqM5P36rSeJbVHSNSSfN7kkyXxr0rlsybDrZjs1iMmagkdANCgSyjlUgWu/ZN+c9HPg/O10Y4h91u3k3HIfdbnopVh1nYMi+cuY7YbbsbGpy8uz65nzjXkEjoASOgZEvru747ax4i6jDpRrkpqr5SOT9aL7H/1dnYPsRu6l9AB4Ez3NOjeFBWjd3vK3478jYzTr52K6dzveoI3D35/5pDxiiHt7BPkHvnuzAVdsm2verk01jUb3pMb8kfKWrYjYsgdACT0oxP6CUk9a8q2BKpknaX8uyaVrX7MbET6z/g+jqVlltABIL2866FHemtR9r9P7apLk2KQzs849kj3mLL3net66KsWWnnku7ueG8/+FrdMw+8r92HiGrsa2QjPbPeFZe6BPtc3bbuvvGYMuQNAAW9VQYq00BZ9t9+YaG/93OieaZu0XUle8s64v6jvWc/yNrpyJHQA0KCn6jG/tizRy5exniU6XDvx9+F+k/TYdj6Hfut2VkyKe+lzu59NX13n0coabV+Ry6DRrLn/6G9x60GviaOWaDXkDgAFZEjoo5L8iMQf6VGwXUk9U2rPmp69Ke688kWduDZ6OxnfIZKGhA4AGnQKJAkTYODc33+VhLtrYnOoyYmG3F/3uQhvxpt5HlYe54rjuBQpC/Ubnwwd+BXlHzGEf+xTBhI6ABRwYkIftb2IaX1Gqtyd/k1mI2LKnlnWqI9aRZoAF32xmC3XqoQOAAVUatAt71lzkpqJd5x0zXa/Q+7Twgy5v3Z7Ed4eN6IOVkyAa1OvoDjbaUf+gt3wNdq5hteFsEmeLl8acgeA7D5efjs+oe/e787kPSvdRR8RMHGNFSmvBy/frpQ9emRj9VKtoUcBJHQAKECDPqeXlylJnFKuLOVDynec3OXNoO1Eeh790XKdMFFu9nZWbXfVPgzTa2hWNmLR95FpIZmjOh0SOgBI6CES4q7lTm/9fPb3oq9Mp6uT8O7kLfnHSVG98PH2gt+N+Mjb9utYQgeAAqI16BlfNGBiiLp0vM4D8c7XcS+uiTbkfs82Iy100hbU0WnD8BH2m61Mbu5nlSXCs/MryqAhT5bQAYBDE/rspD6jLLuXJI1aFum5xjFVG8KuOAqQ6V30s5J5uT+1SOgAoEHnlJ6f84A6x/UUW+Qh99duuy0oa9SJcjPPQ+Uh+QrlpEbDkOHtdiuf1e6J6i3ItdUkdADI7unTvwyPMe16H/vo77akdbkrvVZOyNJ/rvQc/dh6gm32wftaMalvdUJ/eDsSOgAUMKpBN3EhXm8PIHo6Z6A3E7aZ8RnrVrh8Vbe9c19o7DSy68NLD1imkgkdAJDQp227bSp/9tS+ej/eLscJKXtlWXqw8kdfwrXEW+YkdAAoQIMer3ds8hyckc5PqcvufK2Rbcj9kX20Tcexcgh/9XCxZVQdh0Z233FE3d/uBvzYUCShA4CEniqhr0z3kVJ7tERoAhzSdcyy9E1l7YnqLXSql9ABoAANukQBfkuotwJ1WeEtYS3hd2dtryU5Z9nLdPJxaCxylz/LhLWZ24v0zPnQbUvoAFAgM7yZuvWcCagFOs6o224pr3aoOTIQdVJZxjSe1tPlyzILc2jQNegadDToGvQZZTDk7gYAAOtUGnIfve/oCTbTyMDJ6djIgI5ytaS8YtsRXheb7hqU0AFAegifUiIlzeYcS7tI2clSY6a3r/VE9TtlPxI6ABSgQa/V0420XwAWerNoP5UXBWnqKP3+DeXrXJ+y/yrH3ovVi4QOAKxN6FHTUEuy3agJMlOylcKpltr6IeWSxiV0ADiHBv3MHiqAe1+NOvpfO4Yhow99Zn6eOuuwsuHw+vWiU5q/LjI/W99POO8SOgBIAMekj1a4XpprHtKn5+jH2Q89hwvL0iR0AMju6dM/CV1qPjGxSulI6EYDypXlTZCDzniDbcqikYQDGytlCMqQOwAU0JTn2GNq6hSkxqDl7q4FCR0AjqRBBziXv0UX0pTN8ToOdajhUH+OI/+xSegAIAkor3pRH0jH6kMdRCChA0ABGnQAKKA5BtQplGaI/JC6lNABoAANOnr0AAXui1WHVg0ZO6/g5s9B58166ACQ3u710CU+AKTwQSR0ANCgA4B0HoEhZ3UHoIGW0AEAKRPnBJCkkdABAGnQeQGQzjUc4PoBDSVxGHIHAAAAAAAAAAAAACAK66EDQHrX9dABAAAAAIAhvLpT3QFk5fW3f/DfAgwARsPwf8EXqd8AAAAASUVORK5CYII=";const f=e=>((0,i.Qi)("data-v-7e95b58d"),e=e(),(0,i.jt)(),e),b={class:"navbar"},y=f((()=>(0,i.Lk)("div",{class:"imgnav"},[(0,i.Lk)("a",{href:"#/"},[(0,i.Lk)("img",{class:"imgnav",src:A,alt:""})])],-1))),k={class:"divmenunav"},w={href:"#/",class:"sectionsnav"},j={href:"#/about",class:"sectionsnav"},O={href:"#projects",class:"sectionsnav"};function X(e,s,t,a,o,n){return(0,i.uX)(),(0,i.CE)("div",b,[y,(0,i.Lk)("div",k,[(0,i.Lk)("a",w,(0,d.v_)(o.section1),1),(0,i.Lk)("a",j,(0,d.v_)(o.section2),1),(0,i.Lk)("a",O,(0,d.v_)(o.section5),1)]),(0,i.Lk)("img",{class:"imgmenu",src:h,alt:"",onClick:s[0]||(s[0]=(...e)=>n.toggleSidebar&&n.toggleSidebar(...e))}),(0,i.Lk)("div",{class:(0,d.C4)(["sidebar",{active:o.sidebarActive}])},[(0,i.Lk)("a",{href:"#/",class:"sectionsnavsidebar",onClick:s[1]||(s[1]=(...e)=>n.closeSidebar&&n.closeSidebar(...e))},(0,d.v_)(o.section1),1),(0,i.Lk)("a",{href:"#/about",class:"sectionsnavsidebar",onClick:s[2]||(s[2]=(...e)=>n.closeSidebar&&n.closeSidebar(...e))},(0,d.v_)(o.section2),1),(0,i.Lk)("a",{href:"#/projects",class:"sectionsnavsidebar",onClick:s[3]||(s[3]=(...e)=>n.closeSidebar&&n.closeSidebar(...e))},(0,d.v_)(o.section5),1)],2)])}var P={data(){return{section1:"Home",section2:"About me",section5:"Projects",sidebarActive:!1}},methods:{toggleSidebar(){this.sidebarActive=!this.sidebarActive},closeSidebar(){this.sidebarActive=!1}}};const T=(0,p.A)(P,[["render",X],["__scopeId","data-v-7e95b58d"]]);var x=T,D=t.p+"img/github.500e5140.svg",S=t.p+"img/linkedin.49b0a564.svg",H=t.p+"img/Instagram.ab5c0bf8.svg",C=t.p+"img/whatappicon.44f4f41a.svg";const B={class:"divfooter"},E=(0,i.Fv)('<div class="containerfooter" data-v-16d78a28><div class="containersocial" data-v-16d78a28><a href="https://github.com/DouglasLessaT" data-v-16d78a28><img class="imgsocialfooter" src="'+D+'" alt="" data-v-16d78a28></a><a href="https://www.linkedin.com/in/douglaslessat/" data-v-16d78a28><img class="imgsocialfooter" src="'+S+'" alt="" data-v-16d78a28></a><a href="https://www.instagram.com/douglas.lessat/" data-v-16d78a28><img class="imgsocialfooter" src="'+H+'" alt="" data-v-16d78a28></a><a href="https://api.whatsapp.com/send/?phone=5527992730834&amp;text&amp;type=phone_number&amp;app_absent=0" data-v-16d78a28><img class="imgsocialfooter" src="'+C+'" alt="" data-v-16d78a28></a></div><div class="containerlogo" data-v-16d78a28><img class="imgfooter" src="'+A+'" alt="" data-v-16d78a28></div></div>',1),Q=[E];function I(e,s,t,a,o,n){return(0,i.uX)(),(0,i.CE)("div",B,Q)}var U={};const z=(0,p.A)(U,[["render",I],["__scopeId","data-v-16d78a28"]]);var M=z,N={name:"App",components:{Terminal:g,HeaderNav:x,TheFooter:M},data(){return{isLoading:!0}}};const L=(0,p.A)(N,[["render",r]]);var V=L,q=t(1387);function W(e,s,t,a,o,n){const r=(0,i.g2)("SectionOne");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(r)])}var G=t.p+"img/me.7834afa2.jpeg",Z=t.p+"img/Comunicativo.12448d6f.jpg",F=t.p+"img/analiticodesenho.e1aa9a59.png",R=t.p+"img/otimizar-processos.d2b64c7b.jpg",J=t.p+"img/proatividade.7bea63e3.jpg",Y=t.p+"img/espirito-de-equipe.f678ca3b.jpg",K=t.p+"img/gestaodeconflitos.0d3b15cd.jpg";const _=(0,i.Fv)('<div class="section2"><div class="textosection2"><h1 class="TituloSection2">Nice to meet you my name is <span class="TituloSection2Douglas">Douglas</span></h1><div class="divimgsction2mobile"><img class="imgsction2mobile" src="'+G+'" alt=""></div><p class="paragrafoSection2">I am a developer currently studying Systems Analysis and Technology at UniSales - Centro Universitário Salesiano. Welcome to my website, which serves as a portfolio showcasing my ideas!</p><div class="divimgsocialsection2"><a href="https://github.com/DouglasLessaT"><img class="imgsocialsection2" src="'+D+'" alt=""></a><a href="https://www.linkedin.com/in/douglaslessat/"><img class="imgsocialsection2" src="'+S+'" alt=""></a><a href="https://www.instagram.com/douglas.lessat/"><img class="imgsocialsection2" src="'+H+'" alt=""></a><a href="https://api.whatsapp.com/send/?phone=5527992730834&amp;text&amp;type=phone_number&amp;app_absent=0"><img class="imgsocialsection2" src="'+C+'" alt=""></a></div></div><div class="divimgsction2"><img class="imgsction2" src="'+G+'" alt=""></div></div><div class="section3"><h1 class="titulosection">Experencies</h1><div class="divExperenciesgrup"><div class="divExperencies"><p class="tituloExperencies">Project head /Dalta Madeiras, Rio Marino Vila-Velha</p><p class="dataExperencies">JUNE 2022 – PRESENT</p><p class="descriçãoExperencies">At Dalta Madeiras, I played a crucial role as an Administrative Assistant, leading administrative management and supervision of the office&#39;s daily operations. Responsible forcoordinating eight employees and 20 projects, my role involved the efficient organization ofoffice functions, including hiring, training and onboarding new team membersteam. In addition, I actively participated in the company&#39;s data management and analysis,contributing to strategic and effective decision making.</p></div><div class="divExperencies"><p class="tituloExperencies">Estagiario Dev , Brazil</p><p class="dataExperencies">Jan 2024 – PRESENT</p><p class="descriçãoExperencies"> My mission was to help micro-enterprises expand their business through website developmentpersonalized solutions and systems adapted to your specific needs. As part of a teamdynamic and innovative, I was able to apply my technical and creative skills to create solutionsefficient and impactful for our customers. Working autonomously and collaboratively,I always sought to exceed expectations, providing high quality results and contributingfor the continued success of our customers. </p></div></div></div><div class="section4"><h1 class="titulosection">Soft skills</h1><div class="carroselsectio4"><div id="carouselSoftSkills" class="carousel slide"><div class="carousel-inner"><div class="carousel-item active"><div class="cardskills"><div class="imgskills"><img src="'+Z+'" alt=""></div><div class="texttituloskills"><h1>Communicative</h1></div><div class="descricaoskills"><p>Being communicative involves the ability to convey thoughts, ideas, and information effectively. It encompasses both verbal and non-verbal communication, active listening, and the capacity to articulate thoughts clearly. A communicative individual can express themselves fluently, engage in constructive dialogue, and ensure that messages are understood by others.</p></div></div></div><div class="carousel-item"><div class="cardskills"><div class="imgskills"><img src="'+F+'" alt=""></div><div class="texttituloskills"><h1>Analytical</h1></div><div class="descricaoskills"><p>Being analytical involves the capacity to examine information, data, or situations critically and systematically. It includes the ability to identify patterns, trends, and relationships, and draw logical conclusions based on evidence and reasoning. Analytical individuals possess strong problem-solving skills, attention to detail, and the aptitude to evaluate complex issues comprehensively to make informed decisions.</p></div></div></div><div class="carousel-item"><div class="cardskills"><div class="imgskills"><img src="'+R+'" alt=""></div><div class="texttituloskills"><h1>Process Optimization</h1></div><div class="descricaoskills"><p>Process optimization refers to the skill of streamlining workflows, systems, or procedures to enhance efficiency and productivity. It involves identifying bottlenecks, eliminating redundant steps, and implementing improvements to achieve better outcomes. Individuals with this skill can analyze existing processes, propose innovative solutions, and adapt to changing circumstances to achieve optimal results.</p></div></div></div><div class="carousel-item"><div class="cardskills"><div class="imgskills"><img src="'+J+'" alt=""></div><div class="texttituloskills"><h1>Proactivity</h1></div><div class="descricaoskills"><p>Proactivity refers to taking initiative and responsibility for one&#39;s actions and decisions. It involves anticipating challenges, identifying opportunities, and acting ahead of time to prevent issues or capitalize on favorable circumstances. Proactive individuals demonstrate initiative, resourcefulness, and a willingness to go above and beyond expectations to achieve goals or solve problems.</p></div></div></div><div class="carousel-item"><div class="cardskills"><div class="imgskills"><img src="'+Y+'" alt=""></div><div class="texttituloskills"><h1>Team Spirit</h1></div><div class="descricaoskills"><p>Team spirit is the ability to collaborate effectively with others towards a common goal. It encompasses cooperation, supportiveness, and a positive attitude towards team members. Individuals with a strong team spirit value collective success over personal achievements, actively contribute to group efforts, and foster a sense of unity and camaraderie within the team.</p></div></div></div><div class="carousel-item"><div class="cardskills"><div class="imgskills"><img src="'+K+'" alt=""></div><div class="texttituloskills"><h1>Conflict Management</h1></div><div class="descricaoskills"><p>Conflict management entails the ability to handle disagreements, disputes, or tensions constructively. It involves effective communication, active listening, empathy, and negotiation skills to resolve conflicts peacefully and find mutually beneficial solutions. Those proficient in conflict management can mediate disputes, de-escalate confrontations, and foster harmonious relationships within teams or organizations.</p></div></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselSoftSkills" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselSoftSkills" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div></div></div>',3);function $(e,s,t,a,i,o){return _}var ee={};const se=(0,p.A)(ee,[["render",$]]);var te=se,ae={name:"HomeView",components:{SectionOne:te}};const ie=(0,p.A)(ae,[["render",W],["__scopeId","data-v-7439f474"]]);var oe=ie;const ne={class:"sections"};function re(e,s,t,a,o,n){const r=(0,i.g2)("CardsProjects"),d=(0,i.g2)("CardsHardskills");return(0,i.uX)(),(0,i.CE)("div",ne,[(0,i.bF)(r),(0,i.bF)(d)])}var de=t.p+"img/Gatcc.06ead115.png",ce=t.p+"img/Gerenciador de alugel.13aba2ac.png",le=t.p+"img/swagger_editor_view.1d60109b.png";const ve={class:"sectionprojects"},ue=(0,i.Fv)('<div class="containerprojects"><h1 class="titulosection">Projects</h1><div class="containercardsprojects"><div class="cardprojects"><div class="imgprojects"><img src="'+de+'" alt=""></div><div class="texttituloprojects"><h1>Gatcc</h1></div><div class="descricaoprojects"><p>&quot;TCC Presentation Manager&quot; is a system designed to assist university students in organizing and managing their Course Completion Work (TCC) presentations. The backend development for this system is responsible for implementing the logical functionalities that allow the efficient and reliable operation of the system. Project under development</p></div></div><div class="cardprojects"><div class="imgprojects"><img src="'+ce+'" alt=""></div><div class="texttituloprojects"><h1>Rental Manager</h1></div><div class="descricaoprojects"><p>&quot;Rental Housing Manager&quot; is a property management system aimed at residential rentals, while &quot;Backend Development&quot; refers to the development of the logical and functional part of a software system, responsible for processing data, performing calculations, and managing the logic behind the operations. </p></div></div><div class="cardprojects"><div class="imgprojects"><img src="'+le+'" alt=""></div><div class="texttituloprojects"><h1>Manager service order </h1></div><div class="descricaoprojects"><p>The backend development for a &quot;service order manager&quot; plays a crucial role in ensuring the efficiency, reliability, and security of the system. Here&#39;s a detailed description of how the backend would be developed for a service order manager</p></div></div></div></div>',1),pe=[ue];function me(e,s){return(0,i.uX)(),(0,i.CE)("div",ve,pe)}const ge={},Ae=(0,p.A)(ge,[["render",me]]);var he=Ae;const fe={class:"sectionHardskills"},be=(0,i.Fv)('<h1 class="titulosection">Hard skills</h1><div class="containerHardskills"><div class="containercardsHardskills"><div class="Hardskills"><table><thead><tr><th class="hardSkillsTitulo">Hard Skill </th><th class="hardSkillsTitulo">Level</th></tr></thead><tbody><tr><td class="impar-tabela">HTML5 + CSS3</td><td class="impar-tabela">Medium</td></tr><tr><td class="par-tabela">Java Spring boot </td><td class="par-tabela">Medium</td></tr><tr><td class="impar-tabela">Java script</td><td class="impar-tabela">Medium</td></tr><tr><td class="par-tabela">Docker</td><td class="par-tabela">Medium</td></tr><tr><td class="impar-tabela">Linux server</td><td class="impar-tabela">Standard</td></tr><tr><td class="par-tabela">Vue</td><td class="par-tabela">Easy</td></tr><tr><td class="impar-tabela">React</td><td class="impar-tabela">Easy</td></tr><tr><td class="par-tabela">AWS</td><td class="par-tabela">Standard</td></tr><tr><td class="impar-tabela">Google clound</td><td class="impar-tabela">Standard</td></tr><tr><td class="par-tabela">Python</td><td class="par-tabela">Medium</td></tr></tbody></table></div></div></div>',2),ye=[be];function ke(e,s){return(0,i.uX)(),(0,i.CE)("div",fe,ye)}const we={},je=(0,p.A)(we,[["render",ke]]);var Oe=je,Xe={name:"ProjectsView",components:{CardsProjects:he,CardsHardskills:Oe}};const Pe=(0,p.A)(Xe,[["render",re]]);var Te=Pe;const xe={class:"sectionsAbout"};function De(e,s,t,a,o,n){const r=(0,i.g2)("ThisBiography"),d=(0,i.g2)("MyHobby");return(0,i.uX)(),(0,i.CE)("div",xe,[(0,i.bF)(r),(0,i.bF)(d)])}var Se=t.p+"img/noComputador.34c11df8.jpg";const He={class:"section1about"},Ce=(0,i.Fv)('<h1 class="titulosection">My Biography</h1><div class="containersection1about"><div class="divfotosection1about"><img src="'+Se+'" id="fotosection1about" alt=""></div><div class="divtextosection1about"><p class="textBiography"> So where do I begin? I&#39;m the youngest son of Silvana and Pedro, born in Vila Velha, ES. My family had humble beginnings in the neighborhood of Aráças, but my parents moved to my grandparents&#39; house before I was born. I&#39;ve always been an introverted child, but curious to understand how things work and why they work. This curiosity often caused trouble for my grandfather, as I used to disassemble his pocket watches. I was raised mostly by my grandparents, spending most of my time at home. When my brother and father brought a computer home, I was fascinated by how it worked. I spent days and nights learning how to use it and disassemble it. I read many hardware and software books that belonged to my brother. My uncle was the one who most encouraged me to practice the sport that became my hobby today, surfing. He picked me up at home every Saturday and Sunday to go to U&#39;lé. </p><p class="textBiography"> This led me to distance myself from computers and start working and studying to help my parents since I was 13 years old, as I didn&#39;t like my parents spending their money on me. I worked various jobs like distributing pamphlets, waiter, bricklayer&#39;s assistant, mechanic&#39;s assistant, until I finished high school. Then, my father asked me to work with him in the carpentry shop because he was tired of seeing me work for others and because I didn&#39;t know what I wanted to do after high school. Some time passed, and I found those hardware and software books I used to read when I was younger. This reignited my interest in computers, and I delved deeper into understanding the components and operating systems since I only had books about Windows Vista. This led me to decide to pursue a degree in Systems Analysis Technology. </p></div></div>',2),Be=[Ce];function Ee(e,s){return(0,i.uX)(),(0,i.CE)("div",He,Be)}const Qe={},Ie=(0,p.A)(Qe,[["render",Ee]]);var Ue=Ie,ze=t.p+"img/foto1-2x1.896acea1.jpg",Me=t.p+"img/foto1-1x1.08813287.jpg",Ne=t.p+"img/foto2-1x1.4cd632f7.png",Le=t.p+"img/foto3- 1x1.f418e0f0.jpg",Ve=t.p+"img/foto4-1x1.bcfb62ff.jpg";const qe={class:"containersHobbies"},We=(0,i.Fv)('<h1 class="titulosection">My Hobbies</h1><div class="sectionhobby"><div class="divsectionhobby1"><div class="divsectionhobby2"><div class="divimghobby2x1"><img src="'+ze+'" class="fotohobby2x1" alt=""></div><div class="divimghobby1x1"><div class="divmosaico1x1-1"><img src="'+Me+'" class="fotohobby" alt=""><img src="'+Ne+'" class="fotohobby" alt=""></div><div class="divmosaico1x1-2"><img src="'+Le+'" class="fotohobby" alt=""><img src="'+Ve+'" class="fotohobby" alt=""></div></div></div></div></div>',2),Ge=[We];function Ze(e,s){return(0,i.uX)(),(0,i.CE)("div",qe,Ge)}const Fe={},Re=(0,p.A)(Fe,[["render",Ze]]);var Je=Re,Ye={name:"AboutView",components:{ThisBiography:Ue,MyHobby:Je}};const Ke=(0,p.A)(Ye,[["render",De]]);var _e=Ke;const $e=[{path:"/",name:"home",component:oe},{path:"/about",name:"about",component:_e},{path:"/projects",name:"projects",component:Te}],es=(0,q.aE)({history:(0,q.Bt)(),routes:$e});var ss=es;t(6213);(0,a.Ef)(V).use(ss).mount("#app")}},s={};function t(a){var i=s[a];if(void 0!==i)return i.exports;var o=s[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(s,a,i,o){if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],i=e[l][1],o=e[l][2];for(var r=!0,d=0;d<a.length;d++)(!1&o||n>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[d])}))?a.splice(d--,1):(r=!1,o<n&&(n=o));if(r){e.splice(l--,1);var c=i();void 0!==c&&(s=c)}}return s}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,i,o]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/curriculo/"}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var i,o,n=a[0],r=a[1],d=a[2],c=0;if(n.some((function(s){return 0!==e[s]}))){for(i in r)t.o(r,i)&&(t.m[i]=r[i]);if(d)var l=d(t)}for(s&&s(a);c<n.length;c++)o=n[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},a=self["webpackChunkcurriculo"]=self["webpackChunkcurriculo"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(9198)}));a=t.O(a)})();
//# sourceMappingURL=app.aea1a134.js.map